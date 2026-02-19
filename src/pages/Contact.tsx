import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h1 style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: '42px', 
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            Let's <span style={{ color: 'var(--color-accent)' }}>Talk</span>
          </h1>
          <p style={{ 
            color: 'var(--color-text-muted)', 
            fontSize: '18px',
            textAlign: 'center',
            marginBottom: '48px'
          }}>
            Ready to build your digital presence? Tell us about your project and we'll get back to you within 24-48 hours.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
