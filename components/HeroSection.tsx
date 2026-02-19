import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background Effects */}
      <div className={styles.bgEffects} aria-hidden="true">
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.grid} />
      </div>

      <div className="container">
        <div className={styles.inner}>
          {/* Text Content */}
          <div className={styles.textContent}>
            {/* Badge */}
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span>Digital Presence Experts</span>
            </div>

            {/* Headline */}
            <h1 className={styles.headline}>
              Your Business{' '}
              <span className={styles.headlineAccent}>Deserves</span>
              <br />
              to Be Seen.
            </h1>

            {/* Sub-headline */}
            <p className={styles.subheadline}>
              We build your online presence — from stunning websites to viral social content.
              Let's put your brand on the map.
            </p>

            {/* CTA Buttons */}
            <div className={styles.ctaGroup}>
              <Link to="/contact" className="btn btn-primary">
                Start My Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/#services" className="btn btn-ghost">
                See What We Do
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>✓</span>
                <span>Websites that convert</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>✓</span>
                <span>Social media growth</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>✓</span>
                <span>Content that speaks</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.orbContainer}>
              {/* Central orb */}
              <div className={styles.centralOrb}>
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.centralLogo}
                >
                  <rect width="36" height="36" rx="8" fill="url(#heroLogoGrad)" />
                  <path
                    d="M22 8L28 14L16 26L10 28L12 22L22 8Z"
                    fill="none"
                    stroke="#F0F0F5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 22L10 28" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M24 6C26.5 8.5 27.5 12 26 15" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <circle cx="10" cy="28" r="1.5" fill="#F5A623" />
                  <circle cx="16" cy="26" r="1" fill="#6C63FF" />
                  <defs>
                    <linearGradient id="heroLogoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2A2A4E" />
                      <stop offset="1" stopColor="#1A1A3F" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Orbit rings */}
              <div className={styles.ring1} />
              <div className={styles.ring2} />

              {/* Platform badges orbiting */}
              <div className={`${styles.platformBadge} ${styles.badge1}`}>
                <span>TikTok</span>
              </div>
              <div className={`${styles.platformBadge} ${styles.badge2}`}>
                <span>Instagram</span>
              </div>
              <div className={`${styles.platformBadge} ${styles.badge3}`}>
                <span>YouTube</span>
              </div>
              <div className={`${styles.platformBadge} ${styles.badge4}`}>
                <span>Facebook</span>
              </div>
              <div className={`${styles.platformBadge} ${styles.badge5}`}>
                <span>X</span>
              </div>

              {/* Floating stat cards */}
              <div className={styles.statCard1}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Dedicated</span>
              </div>
              <div className={styles.statCard2}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Platforms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
