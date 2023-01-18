import React from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";

import Logo from "../assets/images/logo.png";

import * as styles from "./header.module.scss";

function Header() {
  const toggleLinks = () => {
    const links = document.querySelectorAll(`.${styles.headerNavLinks}`)[0];
    links.classList.toggle(styles.showLinks);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navHeader}>
        <div className='header__logo'>
          <Link to='/'>
            <img src={Logo} alt='logo' id={styles.logo} />
          </Link>
        </div>

        <button type='button' className={styles.navBtn} onClick={toggleLinks}>
          <FiAlignJustify />
          test
        </button>
      </div>

      <nav className={styles.headerNavLinks}>
        <Link to='/' className={styles.headerNavLink}>
          Úvod
        </Link>
        <Link to='/o-mne' className={styles.headerNavLink}>
          O mně
        </Link>
        <Link to='/nabidka' className={styles.headerNavLink}>
          Nabídka
        </Link>
        <Link to='/dorty' className={styles.headerNavLink}>
          Dorty
        </Link>
        <Link to='/cukrovi' className={styles.headerNavLink}>
          Cukroví
        </Link>
        <Link to='/kontakt' className={styles.headerNavLink}>
          Kontakt
        </Link>
      </nav>
    </header>
  );
}

export default Header;
