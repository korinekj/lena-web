import React from "react";

import * as global from "../assets/css/global.module.scss";
import * as styles from "./nabidka.module.scss";

import { Link } from "gatsby";

import Zakusek from "../assets/images/zakusek.jpg";
import Dort from "../assets/images/dort2.jpg";

function Nabidka() {
  const { container } = global;

  const { wrapper, item, img, text, sluzby } = styles;

  return (
    <section className={undefined}>
      <div className={container}>
        <section className={wrapper}>
          <article className={`${item} ${sluzby}`}>
            <div className={img}>
              <img src={Dort} alt='' />
            </div>

            <div className={text}>
              <h2>Dorty</h2>
              <p>Dorty jsou s lehkou šlehanou náplní a s krémovou náplní.</p>
              <Link to='/dorty'>Zobrazit</Link>
            </div>
          </article>

          <article className={`${item} ${sluzby}`}>
            <div className={img}>
              <img src={Zakusek} alt='' />
            </div>
            <div className={text}>
              <h2>Zákusky</h2>
              <p>Široký sortiment zákusků</p>
              <Link to='/zakusky'>Zobrazit</Link>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Nabidka;
