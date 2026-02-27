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
              <span>Global Online Presence</span>
            </div>

            {/* Headline */}
            <h1 className={styles.headline}>
              Build a Powerful <span className={styles.headlineAccent}>Online Presence</span>
              <br />
              & Global Brand.
            </h1>

            {/* Sub-headline */}
            <p className={styles.subheadline}>
              Digital Tech Scribe helps businesses of all sizes establish a commanding online presence. From engaging websites and social media content to professional flyer design, we promote your brand globally.
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
                <span>Website Engagement</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>✓</span>
                <span>Social Media Strategy</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>✓</span>
                <span>Creative Content & Design</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.orbContainer}>
              {/* Central orb */}
              <div className={styles.centralOrb}>
                <img 
                  src="logo.png" 
                  alt="Digital Tech Scribe Logo" 
                  className={styles.centralLogoImg}
                />
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
                <span>Facebook & X</span>
              </div>


              {/* Floating stat cards */}
              <div className={styles.statCard1}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Dedicated</span>
              </div>
              <div className={styles.statCard2}>
                <span className={styles.statNumber}>Global</span>
                <span className={styles.statLabel}>Reach</span>
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
