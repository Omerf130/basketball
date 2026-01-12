import { useEffect, useRef } from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.heading}>צור קשר</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.label}>
              שם מלא
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              מספר טלפון
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              טקסט חופשי
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              rows={6}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            שלח
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

