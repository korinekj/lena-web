import React from "react";
import { Link } from "gatsby";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import ChefIcon from "../assets/images/chef-avatar.png";
import Logo from "../assets/images/logo.png";
import Logo1 from "../assets/images/logo-final.png";

import * as global from "../assets/css/global.module.scss";
import * as styles from "./footer.module.scss";

function Footer() {
  const {
    site__footer,
    col,
    chef,
    logo,
    web__logo,
    nav,
    nav__list,
    nav__item,
    footer__wrap,
    ulice,
    link,
  } = styles;

  return (
    <footer id={site__footer}>
      <div className={`${global.container} ${footer__wrap}`}>
        <div className={col}>
          <Link to='/o-mne' className={link}>
            O mně
          </Link>
          <img src={ChefIcon} alt='' className={chef} />
          <p>
            Jmenuji se Lenka a jsem vášnivá pekařka, která ve svém volném čase
            zbožňuje tvořit a péct dorty a další lahodné dobroty.
          </p>
        </div>

        <div className={`${col} ${web__logo}`}>
          <Link to='/'>
            <img src={Logo1} alt='logo' id={undefined} />
          </Link>
        </div>

        <div className={col}>
          <Link to='/kontakt' className={link}>
            Kontaktní informace
          </Link>
          <nav className={nav}>
            <ul className={nav__list}>
              <li className={nav__item}>
                <FavoriteBorderIcon />
                <p>Mlsání od Léni</p>
              </li>
              <li className={nav__item}>
                <PhoneIphoneIcon />
                <p>+420 731 774 585</p>
              </li>
              <li className={nav__item}>
                <EmailOutlinedIcon />
                <p>korinkovalen@email.cz</p>
              </li>
              <li className={nav__item}>
                <LocationOnOutlinedIcon />
                <div>
                  <p className={ulice}>Žižkova 376</p>
                  <p>394 68 Žirovnice</p>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
