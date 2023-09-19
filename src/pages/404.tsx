import React from "react";
import Layout from "../components/Layout";

import * as styles from "./404.module.scss";
import * as global from "../assets/css/global.module.scss";
import { Link } from "gatsby";

function Error() {
  const { errorPage, error } = styles;
  const { container } = global;

  return (
    <Layout>
      <section className={errorPage}>
        <div className={container}>
          <div className={error}>
            <h1>404</h1>
            <h3>Požadovaná stránka nenalezena</h3>
            <Link to='/'>Klikněte zde pro vrácení na hlavní stránku</Link>
          </div>
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
