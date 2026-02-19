import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={styles.ctaBanner}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className="container">
        <ScrollReveal>
          <div className={styles.inner}>
            <div className={styles.content}>
              <span className={styles.eyebrow}>Ready to grow?</span>
              <h2 className={styles.headline}>
                Ready to grow your{' '}
                <span className={styles.headlineAccent}>business online?</span>
              </h2>
              <p className={styles.subtext}>
                Join the businesses that have already taken their digital presence to the next level. Your brand deserves to be seen.
              </p>
            </div>
            <div className={styles.actions}>
              <Link to="/contact" className="btn btn-gold">
                Let's Talk
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/#services" className="btn btn-ghost">
                View Services
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
