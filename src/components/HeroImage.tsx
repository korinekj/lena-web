import React from "react";
import { Link } from "gatsby";

import * as styles from "./heroImage.module.scss";

import ImageSlider from "./ImageSlider";

function HeroImage() {
  const { heroImage, heroText, hero } = styles;

  return (
    <section className={hero}>
      <ImageSlider />
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

          <h2>Dezerty od Léni</h2>
        </div>
      </div>
    </section>
  );
}

export default HeroImage;
