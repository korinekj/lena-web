import React, { useEffect } from "react";
import Layout from "../components/Layout";

import DortyGallery from "../components/DortyGallery";

import * as global from "../assets/css/global.module.scss";
import * as styles from "../pages/dorty.module.scss";

import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function Dorty() {
  const { container, dortyWrap } = global;

  const { jumpToTop, jumpToTopIcon } = styles;

  // setTimeout(() => {
  //   document.getElementById("jumpToTop")?.addEventListener("click", (event) => {
  //     event.preventDefault();
  //     console.log("Test");
  //     scrollTo({ top: 0, behavior: "smooth" });
  //   });
  // }, 2000);

  useEffect(() => {
    const handleClick = (event: Event) => {
      event.preventDefault();
      console.log("Effect executed");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    document
      .getElementById(`${jumpToTop}`)
      ?.addEventListener("click", handleClick);

    return () => {
      document
        .getElementById(`${jumpToTop}`)
        ?.removeEventListener("click", handleClick);
      console.log("Cleanup executed");
    };
  }, []);

  return (
    <Layout>
      <section className={dortyWrap}>
        <div className={container}>
          <h1>Galerie dortů</h1>
          <DortyGallery />
          <a href='#' id={jumpToTop}>
            <ArrowCircleUpIcon fontSize='large' className={jumpToTopIcon} />
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default Dorty;
