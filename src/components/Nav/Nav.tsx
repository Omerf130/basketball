import { useState } from 'react';
import styles from './Nav.module.scss';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen && (
        <div className={styles.overlay} onClick={closeMenu}></div>
      )}
      <nav className={styles.nav}>
        <div className={styles.container}>
          <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
            <li>
              <a href="#hero" className={styles.navLink} onClick={closeMenu}>
                ראשי
              </a>
            </li>
            <li>
              <a href="#about" className={styles.navLink} onClick={closeMenu}>
                אודות
              </a>
            </li>
            <li>
              <a href="#services" className={styles.navLink} onClick={closeMenu}>
                שירותים
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.navLink} onClick={closeMenu}>
                צור קשר
              </a>
            </li>
          </ul>
          <a href="#hero" className={styles.logo}>
            <img
              src="/pics/basketball-logo.png"
              alt="לוגו כדורסל"
              className={styles.logoImage}
            />
          </a>
          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="תפריט"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;

