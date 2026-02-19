import ScrollReveal from './ScrollReveal';
import styles from './AboutSection.module.css';

const stats = [
  { value: '100%', label: 'Client Focused' },
  { value: '5+', label: 'Platforms Covered' },
  { value: '∞', label: 'Dedication' },
];

export default function AboutSection() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.inner}>
          {/* Visual Side */}
          <ScrollReveal direction="left">
            <div className={styles.visual}>
              <div className={styles.card}>
                {/* Avatar placeholder */}
                <div className={styles.avatar}>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.cardName}>Solo Founder & CEO</span>
                  <span className={styles.cardRole}>Digital Tech Scribe</span>
                </div>
                {/* Status badge */}
                <div className={styles.statusBadge}>
                  <span className={styles.statusDot} />
                  <span>Available for new projects</span>
                </div>
              </div>

              {/* Stats */}
              <div className={styles.statsGrid}>
                {stats.map((stat) => (
                  <div key={stat.label} className={styles.statItem}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Decorative glow */}
              <div className={styles.glow} aria-hidden="true" />
            </div>
          </ScrollReveal>

          {/* Text Side */}
          <ScrollReveal direction="right">
            <div className={styles.content}>
              <span className="section-label">About</span>
              <h2 className="section-title">
                One Person.{' '}
                <span className="gradient-text">Full Commitment.</span>
              </h2>
              <div className={styles.divider} />

              <div className={styles.body}>
                <p>
                  I'm the founder and sole operator of Digital Tech Scribe — and that's not a limitation, it's a strength. When you work with me, you get my undivided attention, my full creative energy, and my personal commitment to your success.
                </p>
                <p>
                  I started this business because I saw too many great businesses being invisible online. Talented entrepreneurs, passionate shop owners, and ambitious brands — all struggling to be found. That's where I come in.
                </p>
                <p>
                  Whether it's building your website from scratch, managing your social media presence, or crafting content that actually resonates — I treat every project like it's my own business on the line.
                </p>
              </div>

              <div className={styles.values}>
                <div className={styles.value}>
                  <div className={styles.valueIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <strong>Trust First</strong>
                    <p>Your brand's reputation is treated with the same care as my own.</p>
                  </div>
                </div>
                <div className={styles.value}>
                  <div className={styles.valueIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4l3 3" />
                    </svg>
                  </div>
                  <div>
                    <strong>Fast Turnaround</strong>
                    <p>No agency delays. Direct communication, quick delivery.</p>
                  </div>
                </div>
                <div className={styles.value}>
                  <div className={styles.valueIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <strong>Results Driven</strong>
                    <p>Every strategy is built around your specific business goals.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
