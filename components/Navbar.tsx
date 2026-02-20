'use client';

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy Logic
      if (location.pathname === '/contact') {
        setActiveLink('/contact');
        return;
      }

      if (location.pathname === '/') {
        if (window.scrollY < 100) {
          setActiveLink('/');
          return;
        }

        const sections = ['services', 'about', 'how-it-works', 'social-proof'];
        let current = '';
        
        for (const id of sections) {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            // middle of the screen threshold
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
              current = `/#${id}`;
              break;
            }
          }
        }
        
        // If we scrolled past all sections, keep the last one or remove it
        if (current) {
          setActiveLink(current);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <img 
            src="logo.png" 
            alt="Digital Tech Scribe Logo" 
            className={styles.logoImg}
            aria-hidden="true"
          />
          <span className={styles.logoText}>
            Digital Tech <span className={styles.logoAccent}>Scribe</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <Link to="/#services" className={`${styles.navLink} ${activeLink === '/#services' ? styles.active : ''}`}>Services</Link>
          <Link to="/#about" className={`${styles.navLink} ${activeLink === '/#about' ? styles.active : ''}`}>About</Link>
          <Link to="/#how-it-works" className={`${styles.navLink} ${activeLink === '/#how-it-works' ? styles.active : ''}`}>How It Works</Link>
          <Link to="/#social-proof" className={`${styles.navLink} ${activeLink === '/#social-proof' ? styles.active : ''}`}>Reach Us</Link>
        </nav>

        {/* CTA + Hamburger */}
        <div className={styles.actions}>
          <Link to="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>
            Get Started
          </Link>
          <button
            className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          <Link to="/#services" className={`${styles.mobileNavLink} ${activeLink === '/#services' ? styles.active : ''}`} onClick={closeMenu}>
            Services
          </Link>
          <Link to="/#about" className={`${styles.mobileNavLink} ${activeLink === '/#about' ? styles.active : ''}`} onClick={closeMenu}>
            About
          </Link>
          <Link to="/#how-it-works" className={`${styles.mobileNavLink} ${activeLink === '/#how-it-works' ? styles.active : ''}`} onClick={closeMenu}>
            How It Works
          </Link>
          <Link to="/#social-proof" className={`${styles.mobileNavLink} ${activeLink === '/#social-proof' ? styles.active : ''}`} onClick={closeMenu}>
            Reach Us
          </Link>
          <Link to="/contact" className={`btn btn-primary ${styles.mobileCta}`} onClick={closeMenu}>
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
