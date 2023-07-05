import React from "react";
import GoogleMap from "../components/GoogleMap";
import Layout from "../components/Layout";

import * as global from "../assets/css/global.module.scss";
import * as styles from "../pages/kontakty.module.scss";

export default function Kontakt() {
  const { container } = global;
  const { kontaktHeroImg, headline } = styles;

  return (
    <Layout>
      <section className={undefined}>
        <section id={kontaktHeroImg}>
          <div className={`${container}`}>
            <h1 id={headline}>Kontakt</h1>
          </div>
        </section>
        <div className={container}>
          <section>
            <h2>Kontaktujte mě</h2>
          </section>
          <section>ZDE IMPLEMENTOVAT NĚJAKÝ KONTAKTNÍ FORMULÁŘ</section>
          <GoogleMap />
        </div>
      </section>
    </Layout>
  );
}
