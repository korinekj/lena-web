import React from "react";
import Layout from "../components/Layout";

import * as global from "../assets/css/index.module.scss";

function Nabidka() {
  return (
    <Layout>
      <main className={global.page}>
        <h1>Stránka Nabidka</h1>
      </main>
    </Layout>
  );
}

export default Nabidka;
