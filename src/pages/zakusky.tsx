import React from "react";
import Layout from "../components/Layout";

import * as global from "../assets/css/global.module.scss";
import ZakuskyGallery from "../components/ZakuskyGallery";

function Zákusky() {
  const { container } = global;

  return (
    <Layout>
      <section className={undefined}>
        <div className={container}>
          <h1 style={{ textAlign: "center" }}>Galerie zákusků</h1>
          <ZakuskyGallery />
        </div>
      </section>
    </Layout>
  );
}

export default Zákusky;
