import React, { useEffect } from "react";
import Layout from "../components/Layout";

import DortyGallery from "../components/DortyGallery";

import * as global from "../assets/css/global.module.scss";

function Dorty() {
  const { container, dortyWrap } = global;

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
      .getElementById("jumpToTop")
      ?.addEventListener("click", handleClick);

    return () => {
      document
        .getElementById("jumpToTop")
        ?.removeEventListener("click", handleClick);
      console.log("Cleanup executed");
    };
  }, []);

  return (
    <Layout>
      <section className={dortyWrap}>
        <div className={container}>
          <h1>Stránka dorty</h1>
          <DortyGallery />
          <a href='#' id='jumpToTop'>
            jump to top
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default Dorty;
