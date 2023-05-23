import React from "react";
import Layout from "../components/Layout";

import * as global from "../assets/css/global.module.scss";

function Cukrovi() {
  const { container } = global;

  return (
    <Layout>
      <section className={undefined}>
        <div className={container}>
          <h1>Stránka Cukrovi</h1>
        </div>
      </section>
    </Layout>
  );
}

export default Cukrovi;
