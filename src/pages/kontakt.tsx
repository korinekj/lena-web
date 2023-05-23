import React from "react";
import GoogleMap from "../components/GoogleMap";
import Layout from "../components/Layout";

import * as global from "../assets/css/global.module.scss";

export default function Kontakt() {
  const { container } = global;

  return (
    <Layout>
      <section className={undefined}>
        <div className={container}>
          <section>hero image section</section>
          <section>kontaktni informace section</section>
          <section>zpusoby kontaktovani section</section>
          <GoogleMap />
        </div>
      </section>
    </Layout>
  );
}
