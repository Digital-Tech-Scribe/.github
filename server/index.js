import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import { Redis } from '@upstash/redis';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize services
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const redis = process.env.REDIS_URL ? new Redis({ url: process.env.REDIS_URL }) : null;

// Rate limiting check
async function checkRateLimit(email) {
  if (!redis) return true; // Skip if Redis not configured
  
  const key = `contact:${email}`;
  const count = await redis.get(key);
  
  if (count && count >= 3) {
    return false;
  }
  
  // Set cooldown for 3 minutes
  await redis.set(key, '1', { EX: 180 });
  return true;
}

// Contact API endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, service, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        details: 'Name, email, and message are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format'
      });
    }

    // Rate limiting
    const allowed = await checkRateLimit(email);
    if (!allowed) {
      return res.status(429).json({ 
        error: 'Too many requests',
        details: 'Please wait 3 minutes before sending another message'
      });
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'hello@digitaltechscribe.com';

    // Send admin notification
    if (resend) {
      await resend.emails.send({
        from: 'Digital Tech Scribe <noreply@digitaltechscribe.com>',
        to: [contactEmail],
        subject: `New Contact: ${name} - ${service || 'General Inquiry'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      });

      // Send auto-reply to client
      await resend.emails.send({
        from: 'Digital Tech Scribe <noreply@digitaltechscribe.com>',
        to: [email],
        subject: 'Thank you for reaching out!',
        html: `
          <h2>Hi ${name}!</h2>
          <p>Thank you for contacting Digital Tech Scribe. I've received your message and will get back to you within 24-48 hours.</p>
          <p>In the meantime, feel free to follow us on social media:</p>
          <ul>
            <li><a href="https://tiktok.com/@digitaltechscribe">TikTok</a></li>
            <li><a href="https://instagram.com/digitaltechscribe">Instagram</a></li>
            <li><a href="https://youtube.com/@digitaltechscribe">YouTube</a></li>
          </ul>
          <p>Best regards,<br/>Digital Tech Scribe</p>
        `
      });
    }

    return res.status(200).json({ 
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Contact API Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
