import ScrollReveal from '../../components/ScrollReveal';
import styles from './Portfolio.module.css';

const projects = [
  {
    title: 'Executive Brand Identity',
    category: 'Full Stack Development',
    description: 'A high-conversion platform for digital consulting firms emphasizing trust and executive presence.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Dynamic Content Engine',
    category: 'Social Strategy',
    description: 'Automation tools and viral content frameworks designed for high-paced social media growth.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Premium Web Ecosystem',
    category: 'UI/UX Design',
    description: 'A seamless, grid-based aesthetic for modern tech startups looking to dominate their niche.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'CDAC Portal',
    category: 'Software Architecture',
    description: 'Spearheading advanced problem-solving and digital accountability through robust software systems.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <div className={styles.bgEffects}>
        <div className={styles.orb} />
      </div>

      <div className="container">
        <header className={styles.header}>
          <ScrollReveal direction="up">
            <h1 className={styles.title}>
              Executive <span className="gradient-text">Portfolio</span>
            </h1>
            <p className={styles.subtitle}>
              A curated showcase of high-impact digital solutions, strategic technical leadership, and premium brand transformations.
            </p>
          </ScrollReveal>
        </header>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <div className={styles.projectCard}>
                <div className={styles.imageWrap}>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.category}>{project.category}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up">
          <div className={styles.footer}>
            <h2 className={styles.projectTitle}>Ready to build something iconic?</h2>
            <p className={styles.description} style={{ marginBottom: '2rem' }}>
              Every project is a partnership built on 100% commitment and technical excellence.
            </p>
            <a href="#/contact" className="btn btn-primary">
              Start Your Transformation
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
