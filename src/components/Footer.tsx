import React from "react";
import { Link } from "gatsby";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import ChefIcon from "../assets/images/chef-avatar.png";
import Logo from "../assets/images/logo.png";

import * as styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={`${styles.about} ${styles.containerColumn}`}>
          <h4>Kdo jsem</h4>
          <img src={ChefIcon} alt='' className={styles.chef} />
          <p>
            Unikátní a lahodné dorty na každou příležitost! Kontaktujte mě pro
            nejlepší dort na Vaší speciální událost.
          </p>
          <p>
            Vaše speciální událost si zaslouží speciální dort. Dejte mi vědět a
            já Vám připravím unikátní a lahodný dort na míru
          </p>
        </div>

        <div className={`${styles.logo} ${styles.containerColumn}`}>
          <Link to='/'>
            <img src={Logo} alt='logo' id={styles.logo} />
          </Link>
        </div>

        <div className={`${styles.contact} ${styles.containerColumn}`}>
          <h4>Kontaktní informace</h4>
          <ul>
            <li>
              <FavoriteBorderIcon />
              <p>Název cukrářství</p>
            </li>
            <li>
              <PhoneIphoneIcon />
              <p>Telefon číslo</p>
            </li>
            <li>
              <EmailOutlinedIcon />
              <p>Email</p>
            </li>
            <li>
              <LocationOnOutlinedIcon />
              <p>Adresa</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
