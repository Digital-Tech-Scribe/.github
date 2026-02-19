import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import styles from './HowItWorksSection.module.css';

const steps = [
  {
    number: '01',
    title: 'Tell Us Your Goal',
    description:
      'Share your vision, your business, and what you want to achieve. Fill out our simple contact form — it takes less than 2 minutes.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'We Build Your Strategy',
    description:
      'I craft a custom plan tailored specifically to your business — no cookie-cutter templates. Every strategy is built around your unique goals.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Go Live & Grow',
    description:
      'Launch with confidence. Your website goes live, your social media starts growing, and your brand starts getting the attention it deserves.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22l-4-9-9-4 20-7z" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section className={`section ${styles.howItWorks}`} id="how-it-works">
      <div className="container">
        {/* Header */}
        <ScrollReveal>
          <div className={styles.header}>
            <span className="section-label">The Process</span>
            <h2 className="section-title">
              Simple Steps to{' '}
              <span className="gradient-text">Your Digital Success</span>
            </h2>
            <p className={`section-subtitle ${styles.subtitle}`}>
              No complicated onboarding. No confusing jargon. Just a clear path from where you are to where you want to be.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 150}>
              <div className={styles.step}>
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className={styles.connector} aria-hidden="true" />
                )}

                {/* Step number */}
                <div className={styles.stepNumber}>
                  <span>{step.number}</span>
                </div>

                {/* Content */}
                <div className={styles.stepContent}>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className={styles.cta}>
            <p className={styles.ctaText}>Ready to start your journey?</p>
            <Link to="/contact" className="btn btn-primary">
              Begin Step 1
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
