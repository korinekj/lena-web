import React from "react";

import { Link } from "gatsby";

import * as styles from "./heroImage.module.scss";

function HeroImage() {
  return (
    <div className={styles.heroImage}>
      <div className={styles.heroText}>
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
  );
}

export default HeroImage;
