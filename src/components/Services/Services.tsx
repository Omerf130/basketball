import { useEffect, useRef } from 'react';
import styles from './Services.module.scss';

const Services = () => {
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
    <section ref={sectionRef} id="services" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.heading}>שירותים</h2>
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg
                className={styles.basketballIcon}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="45" fill="#ff8c00" />
                <path
                  d="M50 5 Q30 25 15 50 Q30 75 50 95 Q70 75 85 50 Q70 25 50 5"
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M50 5 Q70 25 85 50 Q70 75 50 95 Q30 75 15 50 Q30 25 50 5"
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="none"
                />
                <line x1="50" y1="5" x2="50" y2="95" stroke="#ffffff" strokeWidth="3" />
                <line x1="15" y1="50" x2="85" y2="50" stroke="#ffffff" strokeWidth="3" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>אימון אישי</h3>
            <p className={styles.cardText}>
              אימון אחד על אחד המותאם אישית לצרכים ולמטרות שלך. תוכנית אימון
              מקצועית שתעזור לך לשפר את הכישורים הטכניים והפיזיים שלך.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg
                className={styles.basketballIcon}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="45" fill="#ff8c00" />
                <path
                  d="M50 5 Q30 25 15 50 Q30 75 50 95 Q70 75 85 50 Q70 25 50 5"
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M50 5 Q70 25 85 50 Q70 75 50 95 Q30 75 15 50 Q30 25 50 5"
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="none"
                />
                <line x1="50" y1="5" x2="50" y2="95" stroke="#ffffff" strokeWidth="3" />
                <line x1="15" y1="50" x2="85" y2="50" stroke="#ffffff" strokeWidth="3" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>אימון קבוצתי</h3>
            <p className={styles.cardText}>
              אימונים קבוצתיים שמפתחים עבודת צוות, תקשורת על המגרש וכישורי
              משחק משותפים. מושלם לקבוצות וקבוצות נוער.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg
                className={styles.basketballIcon}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="45" fill="#ff8c00" />
                <path
                  d="M50 5 Q30 25 15 50 Q30 75 50 95 Q70 75 85 50 Q70 25 50 5"
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M50 5 Q70 25 85 50 Q70 75 50 95 Q30 75 15 50 Q30 25 50 5"
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="none"
                />
                <line x1="50" y1="5" x2="50" y2="95" stroke="#ffffff" strokeWidth="3" />
                <line x1="15" y1="50" x2="85" y2="50" stroke="#ffffff" strokeWidth="3" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>הכנה למשחקים</h3>
            <p className={styles.cardText}>
              הכנה מקצועית למשחקים חשובים, כולל אסטרטגיה, טקטיקה ותכנון
              משחק. עזרה להגיע מוכנים מקסימלית לכל משחק.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg
                className={styles.basketballIcon}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="45" fill="#ff8c00" />
                <path
                  d="M50 5 Q30 25 15 50 Q30 75 50 95 Q70 75 85 50 Q70 25 50 5"
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M50 5 Q70 25 85 50 Q70 75 50 95 Q30 75 15 50 Q30 25 50 5"
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="none"
                />
                <line x1="50" y1="5" x2="50" y2="95" stroke="#ffffff" strokeWidth="3" />
                <line x1="15" y1="50" x2="85" y2="50" stroke="#ffffff" strokeWidth="3" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>ייעוץ מקצועי</h3>
            <p className={styles.cardText}>
              ייעוץ מקצועי בנושאי פיתוח קריירה, בחירת מסלול מקצועי והדרכה
              אישית. תמיכה בכל שלב בדרך שלך בכדורסל.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

