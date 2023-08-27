import React from "react";
import { Link } from "gatsby";

import * as styles from "./heroImage.module.scss";

// @ts-ignore
import ImageSlider from "./ImageSlider";

function HeroImage() {
  const { heroImage, heroText, hero } = styles;

  return (
    <section className={hero}>
      <ImageSlider>
        <div className={heroImage}>
          <div className={heroText}>
            <h2>Mlsání od Léni</h2>
            <h1>
              Zakázkové pečení<span>dortů a zákusků</span>
            </h1>

            <Link to='/kontakt'>
              <button type='button' role='link'>
                Kontaktujte mě
              </button>
            </Link>
          </div>
        </div>
      </ImageSlider>
    </section>
  );
}

export default HeroImage;
