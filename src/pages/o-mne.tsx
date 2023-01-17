import React from "react";
import Layout from "../components/Layout";

import * as global from "../assets/css/index.module.scss";

function About() {
  return (
    <Layout>
      <main className={global.page}>
        <h1>Stránka o mě</h1>
      </main>
    </Layout>
  );
}

export default About;
