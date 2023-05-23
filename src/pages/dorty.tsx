import React from "react";
import Layout from "../components/Layout";

import DortyGallery from "../components/DortyGallery";

import * as global from "../assets/css/global.module.scss";

function Dorty() {
  const { container } = global;

  return (
    <Layout>
      <section className={undefined}>
        <div className={container}>
          <h1>Stránka dorty</h1>
          <DortyGallery />
        </div>
      </section>
    </Layout>
  );
}

export default Dorty;
