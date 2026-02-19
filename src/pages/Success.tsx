import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ 
      paddingTop: '120px', 
      paddingBottom: '80px', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '500px' }}>
        {/* Success Icon */}
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--color-accent), #8B7FFF)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 32px',
          boxShadow: '0 8px 32px var(--color-accent-glow)'
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 style={{ 
          fontFamily: 'var(--font-display)', 
          fontSize: '36px', 
          marginBottom: '16px'
        }}>
          Message <span style={{ color: 'var(--color-accent)' }}>Sent!</span>
        </h1>
        
        <p style={{ 
          color: 'var(--color-text-muted)', 
          fontSize: '18px',
          marginBottom: '32px',
          lineHeight: '1.6'
        }}>
          Thank you for reaching out. We've received your message and will get back to you within 24-48 hours.
        </p>

        <p style={{ 
          color: 'var(--color-text-muted)', 
          fontSize: '14px',
          marginBottom: '40px'
        }}>
          Redirecting to home in {countdown} seconds...
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            Send Another Message
          </Link>
        </div>
      </div>
    </div>
  );
}
