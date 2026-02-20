import ScrollReveal from './ScrollReveal';
import styles from './AboutSection.module.css';

const stats = [
  { value: 'React.js', label: 'Framework' },
  { value: 'UI/UX', label: 'Web Design' },
  { value: 'B.Sc.', label: 'Building Tech' },
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
                  <span className={styles.cardName}>Andrew (Chukwudiebie) Onukwu</span>
                  <span className={styles.cardRole}>Front-End Developer & Founder</span>
                </div>
                {/* Contact Badges */}
                <div style={{ display: 'flex', gap: '12px', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a 
                    href="https://www.linkedin.com/in/andrew-onukwu-5b4a7a22a/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.statusBadge}
                    style={{ textDecoration: 'none', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span style={{ fontWeight: 600, color: 'var(--color-text-primary)'}}>LinkedIn</span>
                  </a>
                  <a 
                    href="mailto:digitaltechscribe@gmail.com" 
                    className={styles.statusBadge}
                    style={{ textDecoration: 'none', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <span style={{ fontWeight: 600, color: 'var(--color-text-primary)'}}>Email Me</span>
                  </a>
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
                  Founding Digital Tech Scribe in June 2024, I've been leveraging my deep understanding of web development and responsive design to lead the company towards innovative solutions. My core competencies in front-end development ensure that our projects resonate with tech-savvy clients, solidifying our reputation as a forward-thinking leader in our industry.
                </p>
                <p>
                  With me, you aren't just getting another agency — you are getting a dedicated Professional Builder. With a Bachelor of Science in Building Construction Technology from Ambrose Alli University, my educational background incredibly enriches my approach to driving growth, structuring complex problem-solving, and delivering absolute excellence in your digital presence.
                </p>
              </div>

              <div className={styles.values}>
                <div className={styles.value}>
                  <div className={styles.valueIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <strong>Chief Executive Officer — Digital Tech Scribe</strong>
                    <p>Leading the vision and execution of premium responsive web design and tailored digital development solutions.</p>
                  </div>
                </div>
                <div className={styles.value}>
                  <div className={styles.valueIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div>
                    <strong>Lead Software Developer — CDAC</strong>
                    <p>Spearheading software development, advanced problem-solving, and driving digital accountability initiatives.</p>
                  </div>
                </div>
                <div className={styles.value}>
                  <div className={styles.valueIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Construction Project Manager — Tiles & Fitt Ltd</strong>
                    <p>Merging building construction site management logic with robust technical front-end development capabilities.</p>
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
