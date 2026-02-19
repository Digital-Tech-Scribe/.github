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
          <svg
            width="64"
            height="64"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.logoSvg}
          >
            <rect width="36" height="36" rx="8" fill="url(#loaderGrad)" />
            <path
              d="M22 8L28 14L16 26L10 28L12 22L22 8Z"
              fill="none"
              stroke="#F0F0F5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.quillPath}
            />
            <path
              d="M12 22L10 28"
              stroke="#F5A623"
              strokeWidth="1.5"
              strokeLinecap="round"
              className={styles.accentPath}
            />
            <path
              d="M24 6C26.5 8.5 27.5 12 26 15"
              stroke="#F5A623"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              className={styles.arcPath}
            />
            <circle cx="10" cy="28" r="1.5" fill="#F5A623" />
            <circle cx="16" cy="26" r="1" fill="#6C63FF" />
            <defs>
              <linearGradient id="loaderGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1A1A2E" />
                <stop offset="1" stopColor="#0A0A1F" />
              </linearGradient>
            </defs>
          </svg>
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
