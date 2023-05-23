import React from "react";
import { Link } from "gatsby";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import ChefIcon from "../assets/images/chef-avatar.png";
import Logo from "../assets/images/logo.png";

import * as GLOBAL from "../assets/css/global.module.scss";
import * as styles from "./footer.module.scss";

function Footer() {
  const { site__footer, col, chef, logo, nav, nav__list, nav__item } = styles;

  return (
    <footer className={site__footer}>
      <div className={GLOBAL.container}>
        <div className={col}>
          <h4>Kdo jsem</h4>
          <img src={ChefIcon} alt='' className={chef} />
          <p>
            Vaše speciální událost si zaslouží speciální dort. Dejte mi vědět a
            já Vám připravím unikátní a lahodný dort na míru
          </p>
        </div>

        <div className={col}>
          <Link to='/'>
            <img src={Logo} alt='logo' id={logo} />
          </Link>
        </div>

        <div className={col}>
          <h4>Kontaktní informace</h4>
          <nav className={nav}>
            <ul className={nav__list}>
              <li className={nav__item}>
                <FavoriteBorderIcon />
                <p>Název cukrářství</p>
              </li>
              <li className={nav__item}>
                <PhoneIphoneIcon />
                <p>Telefon číslo</p>
              </li>
              <li className={nav__item}>
                <EmailOutlinedIcon />
                <p>Email</p>
              </li>
              <li className={nav__item}>
                <LocationOnOutlinedIcon />
                <p>Adresa</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
