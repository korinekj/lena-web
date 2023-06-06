import React from "react";
import { Link } from "gatsby";

import Logo from "../assets/images/logo.png";

import * as global from "../assets/css/global.module.scss";
import * as styles from "./header.module.scss";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

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
    phone,
    social_icons,
    showMobile,
    mainHeader,
    muiFacebook,
    muiInstagram,
  } = styles;

  const { container } = global;

  return (
    <header className={site__header}>
      <section className={`${container} ${showMobile}`}>
        <div className={phone}>
          <PhoneIphoneIcon />
          <p>+420 111 111 111</p>
        </div>
        <div className={social_icons}>
          <FacebookIcon className={muiFacebook} />
          <InstagramIcon className={muiInstagram} />
        </div>
      </section>

      <section className={`${container} ${mainHeader}`}>
        <Link className={logo} to='/'>
          <img src={Logo} alt='logo' id={logo} />
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
        </div>
      </section>
    </header>
  );
}

export default Header;
