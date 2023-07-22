import React from "react";

import images from "./imageSlides.js";

function ImageSlider() {
  return (
    <div>
      <img src={images[0]} alt='' />
    </div>
  );
}

export default ImageSlider;
