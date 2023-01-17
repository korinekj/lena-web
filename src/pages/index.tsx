import * as React from "react";
import Layout from "../components/Layout";

import * as global from "../assets/css/index.module.scss";

export default function Home() {
  return (
    <Layout>
      <main className={global.page}>
        <h1>main page</h1>
      </main>
    </Layout>
  );
}
