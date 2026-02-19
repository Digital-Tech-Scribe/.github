import ScrollReveal from './ScrollReveal';
import styles from './ServicesSection.module.css';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Website Design & Development',
    description: 'From landing pages to full websites that convert visitors into loyal customers. Clean, fast, and built to impress.',
    features: ['Custom Design', 'Mobile Responsive', 'SEO Optimised'],
    color: 'accent',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: 'Social Media Management',
    description: 'TikTok, Instagram, Facebook — we handle the posting, strategy, and growth so you can focus on running your business.',
    features: ['Content Calendar', 'Engagement Strategy', 'Analytics Reports'],
    color: 'gold',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <path d="M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2z" />
        <path d="M7 12h10M7 16h6" />
      </svg>
    ),
    title: 'Flyer & Graphic Design',
    description: 'Eye-catching print and digital flyer designs that make your brand impossible to ignore — online and offline.',
    features: ['Print-Ready Files', 'Digital Formats', 'Brand Consistent'],
    color: 'accent',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Content Creation',
    description: 'Scripts, captions, articles — content that speaks your brand voice and connects with your audience on every platform.',
    features: ['Brand Voice', 'Multi-Platform', 'SEO Content'],
    color: 'gold',
  },
];

export default function ServicesSection() {
  return (
    <section className={`section ${styles.services}`} id="services">
      <div className="container">
        {/* Header */}
        <ScrollReveal>
          <div className={styles.header}>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">
              Everything Your Brand{' '}
              <span className="gradient-text">Needs to Shine</span>
            </h2>
            <p className={`section-subtitle ${styles.subtitle}`}>
              From your first website to a full digital presence — we handle it all so you can focus on what you do best.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <div className={`${styles.card} ${styles[`card${service.color === 'gold' ? 'Gold' : 'Accent'}`]}`}>
                <div className={`${styles.iconWrap} ${styles[`icon${service.color === 'gold' ? 'Gold' : 'Accent'}`]}`}>
                  {service.icon}
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <ul className={styles.features}>
                  {service.features.map((feat) => (
                    <li key={feat} className={styles.feature}>
                      <span className={styles.featureDot} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
