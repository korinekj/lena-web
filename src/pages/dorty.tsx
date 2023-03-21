import React from "react";
import Layout from "../components/Layout";

import DortyGallery from "../components/DortyGallery";

import * as global from "../assets/css/index.module.scss";

function Dorty() {
  return (
    <Layout>
      <main className={global.page}>
        <h1>Stránka dorty</h1>
        <DortyGallery />
      </main>
    </Layout>
  );
}

export default Dorty;
