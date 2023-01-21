import React from "react";

import * as styles from "./heroImage.module.scss";

function HeroImage() {
  return (
    <div className={styles.heroImage}>
      <div className={styles.heroText}>
        <h1>I am John Doe</h1>
        <p>And i am a Photographer</p>
        <button type='button'>Hire me</button>
      </div>
    </div>
  );
}

export default HeroImage;
