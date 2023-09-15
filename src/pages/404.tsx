import React from "react";
import Layout from "../components/Layout";

import * as styles from "./404.module.scss";
import * as global from "../assets/css/global.module.scss";

function Error() {
  const { errorPage } = styles;
  const { container } = global;

  return (
    <Layout>
      <section className={errorPage}>
        <div className={container}>
          <h1>404</h1>
          <h3>Stránka nenalezena</h3>
        </div>
      </section>
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>Chyba 404 | Mlsání od Léni</title>
    <meta
      name='description'
      content='Omlouváme se, ale tato stránka neexistuje. Zkuste najít to, co hledáte, na našem hlavním webu.'
    />
  </>
);

export default Error;
