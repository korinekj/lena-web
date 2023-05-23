import React from "react";

import { Link } from "gatsby";

import * as styles from "./heroImage.module.scss";

function HeroImage() {
  const { heroImage, heroText, hero } = styles;

  return (
    <section className={hero}>
      <div className={heroImage}>
        <div className={heroText}>
          <h1>
            Zakázkové pečení<span>dortů a zákusků</span>
          </h1>
          <Link to='/kontakt'>
            <button type='button' role='link'>
              Objednej si zde
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroImage;
