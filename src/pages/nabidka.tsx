import React from "react";
import Layout from "../components/Layout";

import * as global from "../assets/css/global.module.scss";
import * as styles from "./nabidka.module.scss";

import { Link } from "gatsby";

function Nabidka() {
  const { container } = global;

  const { wrapper, item, img } = styles;

  return (
    <Layout>
      <section className={undefined}>
        <div className={container}>
          <h1>Stránka Nabidka</h1>
          <section className={wrapper}>
            <article className={item}>
              <img src='' alt='' className={img} />
              <div>
                <h2>Dorty</h2>
                <p>Dorty jsou s lehkou šlehanou náplní a s krémovou náplní.</p>
                <Link to='/dorty'>Zobrazit</Link>
              </div>
            </article>
            <article className={item}>
              <img src='' alt='' className={img} />
              <div>
                <h2>Zákusky</h2>
                <p>Široký sortiment zákusků</p>
                <Link to='/zakusky'>Zobrazit</Link>
              </div>
            </article>
          </section>
        </div>
      </section>
    </Layout>
  );
}

export default Nabidka;
