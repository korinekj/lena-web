import React from "react";
import { Link } from "gatsby";

import Logo from "../assets/images/logo.png";
import Logo1 from "../assets/images/logo-final.png";

import * as global from "../assets/css/global.module.scss";
import * as styles from "./header.module.scss";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Header() {
  const {
    site__header,
    logo,
    logoResized,
    menu,
    menu_btn,
    menu_btn__burger,
    nav,
    nav__list,
    nav__item,
    nav__link,
    visible,
    phone,
    social_icons,
    showMobile,
    mainHeader,
    muiFacebook,
    muiInstagram,
    center,
    desktop_only,
  } = styles;

  const { container } = global;

  const toggleLinks = () => {
    const navEl = document.querySelectorAll(`.${nav}`)[0];
    const logoImg = document.getElementById(`${logo}`);
    const menuC = document.querySelector(`.${menu}`);

    navEl.classList.toggle(`${visible}`);
    logoImg?.classList.toggle(`${logoResized}`);
    menuC?.classList.toggle(`${center}`);
  };

  return (
    <header id='top' className={site__header}>
      <section className={`${container} ${showMobile}`}>
        <div className={phone}>
          <PhoneIphoneIcon />
          <p>+420 111 111 111</p>
        </div>
        <div className={`${social_icons}`}>
          <a href='https://m.me/lenka.brynova' target='_blank'>
            <FacebookIcon className={muiFacebook} />
          </a>
          <a href='https://www.instagram.com/direct/t/104498714284832' target='_blank'>
            <InstagramIcon className={muiInstagram} />
          </a>
        </div>
      </section>

      <section className={`${container} ${mainHeader}`}>
        <div className={logo}>
          <Link className={logo} to='/'>
            <img src={Logo1} alt='logo' id={logo} />
          </Link>
        </div>

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
                <Link to='/zakusky' className={nav__link}>
                  Zákusky
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

        <div className={`${social_icons} ${desktop_only}`}>
          <a href='https://m.me/lenka.brynova' target='_blank'>
            <FacebookIcon className={muiFacebook} />
          </a>
          <a href='https://www.instagram.com/direct/t/104498714284832' target='_blank'>
            <InstagramIcon className={muiInstagram} />
          </a>
        </div>
      </section>
    </header>
  );
}

export default Header;
