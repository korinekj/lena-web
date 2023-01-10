import React from "react";
import Layout from "../components/Layout";

import * as styles from "./404.module.scss";

function Error() {
  return (
    <Layout>
      <main className={styles.errorPage}>
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </Layout>
  );
}

export default Error;
