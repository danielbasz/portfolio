'use client';

import { useEffect, useCallback } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactModal.module.scss';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [state, handleSubmit] = useForm("mjgbbdeg");

  // Close on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          ×
        </button>
        
        <h2 className={styles.title}>How about some coffee? :)</h2>
        
        {state.succeeded ? (
          <div className={styles.success}>
            <p>Thanks for reaching out! I&apos;ll get back to you soon.</p>
            <button className={styles.btnPrimary} onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="your@email.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your message..."
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            
            <button 
              type="submit" 
              className={styles.btnPrimary}
              disabled={state.submitting}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
