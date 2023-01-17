import React from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";

import * as styles from "./header.module.scss";

function Header() {
  const toggleLinks = () => {
    const links = document.querySelectorAll(`.${styles.header__navLinks}`)[0];
    links.classList.toggle(styles.showLinks);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navHeader}>
        <div className='header__logo'>
          <h1>LOGO</h1>
        </div>
        <button type='button' className={styles.navBtn} onClick={toggleLinks}>
          <FiAlignJustify />
          test
        </button>
      </div>

      <nav className={styles.header__navLinks}>
        <Link to='/' className={styles.header__navLink}>
          Úvod
        </Link>
        <Link to='/o-mne' className={styles.header__navLink}>
          O mně
        </Link>
        <Link to='/nabidka' className={styles.header__navLink}>
          Nabídka
        </Link>
        <Link to='/dorty' className={styles.header__navLink}>
          Dorty
        </Link>
        <Link to='/cukrovi' className={styles.header__navLink}>
          Cukroví
        </Link>
        <Link to='/kontakt' className={styles.header__navLink}>
          Kontakt
        </Link>
      </nav>
    </header>
  );
}

export default Header;
