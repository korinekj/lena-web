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

export const Head = () => (
  <>
    <title>Zákusky | Mlsání od Léni</title>
    <meta
      name='description'
      content='Neodolatelné drobné sladkosti, které osladí každý okamžik. Objednejte si naše zakusky a dopřejte si sladkou radost.'
    />
  </>
);
