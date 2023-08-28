import React from "react";

import * as styles from "./divider.module.scss";

function Divider() {
  const { hDivider, shadow } = styles;

  return (
    <div className={hDivider}>
      <div className={shadow}></div>
    </div>
  );
}

export default Divider;
