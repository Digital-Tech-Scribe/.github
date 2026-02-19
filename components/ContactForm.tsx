'use client';

import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  email: string;
  business: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const services = [
  'Website Design & Development',
  'Social Media Management',
  'Flyer & Graphic Design',
  'Content Creation',
  'Multiple Services',
  'Not Sure Yet',
];

export default function ContactForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    business: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Your name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Your email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your project.';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide a bit more detail (at least 20 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validate()) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          setSubmitError(
            'You\'ve already submitted recently. Please wait a few minutes before trying again.'
          );
        } else {
          setSubmitError(data.error || 'Something went wrong. Please try again.');
        }
        return;
      }

      // Success — redirect to thank-you page
      navigate('/success');
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* Row 1: Name + Email */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Full Name <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            autoComplete="name"
            disabled={isLoading}
          />
          {errors.name && (
            <span className={styles.errorMsg} role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email Address <span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@yourbusiness.com"
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            autoComplete="email"
            disabled={isLoading}
          />
          {errors.email && (
            <span className={styles.errorMsg} role="alert">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      {/* Row 2: Business + Service */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="business" className={styles.label}>
            Business Name <span className={styles.optional}>(optional)</span>
          </label>
          <input
            type="text"
            id="business"
            name="business"
            value={formData.business}
            onChange={handleChange}
            placeholder="Your Business Ltd."
            className={styles.input}
            autoComplete="organization"
            disabled={isLoading}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="service" className={styles.label}>
            Service Interested In <span className={styles.optional}>(optional)</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={styles.select}
            disabled={isLoading}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Tell Us About Your Project <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your business, what you need, and any goals you have in mind..."
          rows={6}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          disabled={isLoading}
        />
        {errors.message && (
          <span className={styles.errorMsg} role="alert">
            {errors.message}
          </span>
        )}
        <span className={styles.charCount}>
          {formData.message.length} characters
        </span>
      </div>

      {/* Submit Error */}
      {submitError && (
        <div className={styles.submitError} role="alert">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {submitError}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className={`btn btn-primary ${styles.submitBtn}`}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <span className={styles.spinner} aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            Send My Message
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
            </svg>
          </>
        )}
      </button>

      <p className={styles.disclaimer}>
        We typically respond within 24 hours. Your information is kept private and never shared.
      </p>
    </form>
  );
}
