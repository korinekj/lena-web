import React from "react";
import GoogleMap from "../components/GoogleMap";
import Layout from "../components/Layout";

import * as global from "../assets/css/index.module.scss";

export default function Kontakt() {
  return (
    <Layout>
      <main className={global.page}>
        <section>hero image section</section>
        <section>kontaktni informace section</section>
        <section>zpusoby kontaktovani section</section>
        <GoogleMap />
      </main>
    </Layout>
  );
}
