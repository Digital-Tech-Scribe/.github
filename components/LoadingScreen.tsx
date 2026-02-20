'use client';

import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fade-out after 1.8s
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1800);

    // Remove from DOM after fade completes
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`${styles.loader} ${isFading ? styles.fadeOut : ''}`} aria-hidden="true">
      <div className={styles.content}>
        {/* Animated Logo */}
        <div className={styles.logoWrap}>
          <img 
            src="logo.png" 
            alt="Digital Tech Scribe Logo" 
            className={styles.logoImg}
          />
          <div className={styles.glowRing} />
        </div>

        {/* Brand Name */}
        <div className={styles.brandName}>
          <span className={styles.brandText}>Digital Tech</span>
          <span className={styles.brandAccent}>Scribe</span>
        </div>

        {/* Loading Bar */}
        <div className={styles.progressBar}>
          <div className={styles.progressFill} />
        </div>
      </div>
    </div>
  );
}
