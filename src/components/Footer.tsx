import React from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ChefIcon from "../assets/images/chef-avatar.png";

import * as styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className='main-footer'>
      <div className={styles.container}>
        <div className={styles.about}>
          <h4>Kdo jsem</h4>
          <img src={ChefIcon} alt='' />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae obcaecati, modi debitis dignissimos provident excepturi!
          </p>
        </div>

        <div className={styles.logo}>FOOTER LOGO / ODKAZ NA HOME</div>

        <div className={styles.contact}>
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
