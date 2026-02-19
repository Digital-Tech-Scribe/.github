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
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.logoIcon}
            aria-hidden="true"
          >
            {/* Circuit-quill icon */}
            <rect width="36" height="36" rx="8" fill="url(#logoGrad)" />
            {/* Quill/pen tip */}
            <path
              d="M22 8L28 14L16 26L10 28L12 22L22 8Z"
              fill="none"
              stroke="#F0F0F5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Circuit trace */}
            <path
              d="M12 22L10 28"
              stroke="#F5A623"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Wi-Fi arc */}
            <path
              d="M24 6C26.5 8.5 27.5 12 26 15"
              stroke="#F5A623"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M26.5 4C30 7.5 31.5 13 29.5 18"
              stroke="#F5A623"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
            {/* Circuit dots */}
            <circle cx="10" cy="28" r="1.5" fill="#F5A623" />
            <circle cx="16" cy="26" r="1" fill="#6C63FF" />
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1A1A2E" />
                <stop offset="1" stopColor="#0A0A1F" />
              </linearGradient>
            </defs>
          </svg>
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
