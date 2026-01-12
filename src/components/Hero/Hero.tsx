import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.heading}>מאמן כדורסל מקצועי</h1>
        <p className={styles.subtitle}>מביא את המשחק שלך לרמה הבאה</p>
        <div className={styles.ctaWrapper}>
          <a href="#contact" className={styles.ctaButton}>
            צור קשר
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

