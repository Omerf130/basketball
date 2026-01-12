import { useEffect, useRef } from 'react';
import styles from './About.module.scss';

const About = () => {
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
    <section ref={sectionRef} id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>אודותי</h2>
        <div className={styles.content}>
          <p className={styles.text}>
            אני מאמן כדורסל מקצועי עם ניסיון של שנים רבות בתחום. המטרה שלי היא
            לעזור לשחקנים לשפר את הכישורים שלהם ולהביא את המשחק שלהם לרמה הבאה.
          </p>
          <p className={styles.text}>
            דרך אימונים מקצועיים, תוכניות אימון מותאמות אישית ותמיכה מתמדת, אני
            מסייע לשחקנים להגשים את הפוטנציאל שלהם ולהגיע להישגים משמעותיים.
          </p>
          <p className={styles.text}>
            אני מאמין שכל שחקן יכול לשפר את עצמו עם הדרכה נכונה, מוטיבציה ונחישות.
            בואו נעבד יחד כדי להשיג את המטרות שלכם.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

