import * as React from "react";
import Layout from "../components/Layout";
import GoogleMap from "../components/GoogleMap";

import * as styles from "./index.module.scss";

export default function Home() {
  return (
    <>
      <Layout>
        <main className={styles.page}>
          <h1>Main</h1>
        </main>
      </Layout>
      <GoogleMap />
    </>
  );
}
