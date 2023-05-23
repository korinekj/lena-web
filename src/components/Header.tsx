import React from "react";
import { Link } from "gatsby";

import Logo from "../assets/images/logo.png";

import * as GLOBAL from "../assets/css/global.module.scss";
import * as styles from "./header.module.scss";

function Header() {
  const toggleLinks = () => {
    const links = document.querySelectorAll(`.${styles["nav__link"]}`)[0];
    links.classList.toggle(styles.showLinks);
  };

  const {
    site__header,
    logo,
    menu,
    menu_btn,
    menu_btn__burger,
    nav,
    nav__list,
    nav__item,
    nav__link,
    showLinks,
    social_icons,
  } = styles;

  return (
    <header className={site__header}>
      <div className={GLOBAL.container}>
        <Link className={logo} to='/'>
          <img src={Logo} alt='logo' id={styles.logo} />
        </Link>

        <div className={menu}>
          <div className={menu_btn} onClick={toggleLinks}>
            <div className={menu_btn__burger}></div>
          </div>
          <nav className={nav}>
            <ul className={nav__list}>
              <li className={nav__item}>
                <Link to='/' className={nav__link}>
                  Úvod
                </Link>
              </li>
              <li className={nav__item}>
                <Link to='/o-mne' className={nav__link}>
                  O mně
                </Link>
              </li>
              <li className={nav__item}>
                <Link to='/nabidka' className={nav__link}>
                  Nabídka
                </Link>
              </li>
              <li className={nav__item}>
                <Link to='/dorty' className={nav__link}>
                  Dorty
                </Link>
              </li>
              <li className={nav__item}>
                <Link to='/cukrovi' className={nav__link}>
                  Cukroví
                </Link>
              </li>
              <li className={nav__item}>
                <Link to='/kontakt' className={nav__link}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
          <div className={social_icons}>
            <a href='#'>facebook</a>
            <a href='#'>instagram</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
