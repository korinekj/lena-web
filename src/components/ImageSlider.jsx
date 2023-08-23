import React, { useEffect, useState } from "react";

import CircleIcon from "@mui/icons-material/Circle";

import slide1 from "../assets/images/hero-images/compressed/slide1.jpg";
import slide2 from "../assets/images/hero-images/compressed/slide2.jpg";
import slide3 from "../assets/images/hero-images/compressed/slide3.jpg";
import slide4 from "../assets/images/hero-images/compressed/slide4.jpg";

const images = [
  { url: slide1, title: "Image 1" },
  { url: slide2, title: "Image 2" },
  { url: slide3, title: "Image 3" },
  { url: slide4, title: "Image 4" },
];

function ImageSlider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hooks
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
      console.log(currentIndex);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  // Functions
  const previousSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  /* INLINE STYLES */
  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${images[currentIndex].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "background-image 0.6s ease-in-out",
  };

  const globalArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    fontSize: "50px",
    zIndex: "1",
    color: "white",
    cursor: "pointer",
  };

  const leftArrowStyles = {
    ...globalArrowStyles,
    left: "25px",
  };

  const rightArrowStyles = {
    ...globalArrowStyles,
    right: "25px",
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    transform: "translateY(-35px)",
  };

  const dotStyles = {
    margin: "0 0.2em",
    cursor: "pointer",
    color: "white",
  };

  const activeDotStyles = {
    ...dotStyles,
    color: "#b34255",
  };

  /* END INLINE STYLES */

  return (
    <div style={sliderStyles}>
      <div style={slideStyles}>
        {children}
        {/* Hide control arrows */}
        {/* <div style={leftArrowStyles} onClick={previousSlide}>
          ←
        </div>
        <div style={rightArrowStyles} onClick={nextSlide}>
          →
        </div> */}
      </div>
      <div style={dotsContainerStyles}>
        {images.map((slide, slideIndex) => (
          <div
            style={currentIndex === slideIndex ? activeDotStyles : dotStyles}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <span>
              <CircleIcon />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
