import React from "react";
import Layout from "../components/Layout";

import * as global from "../assets/css/index.module.scss";

function Cukrovi() {
  return (
    <Layout>
      <main className={global.page}>
        <h1>Stránka Cukrovi</h1>
      </main>
    </Layout>
  );
}

export default Cukrovi;
