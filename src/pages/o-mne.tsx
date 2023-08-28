import React from "react";
import Layout from "../components/Layout";

import * as global from "../assets/css/global.module.scss";
import * as styles from "../pages/o-mne.module.scss";

import img from "../assets/images/dorty/image00058.jpeg";
import img1 from "../assets/images/o-mne/resized/compressed/image00002.jpeg";
import img2 from "../assets/images/o-mne/resized/compressed/image00004.jpeg";

function About() {
  const { container } = global;

  const { about, col } = styles;

  return (
    <Layout>
      <section className={undefined}>
        <div className={container}>
          <h1>
            Jmenuji se Lenka
            <span>
              <br /> a jsem vášnivá pekařka
            </span>
          </h1>
          <div className={about}>
            <div className={col}>
              <p>
                Ve svém volném čase se ráda oddávám tvorbě a pečení dortů a
                dalších lahodných dobrot. Mé srdce patří krásnému světu pečení,
                kde se vůně čerstvě upečených dezertů snoubí s radostí z tvorby.
                Na této sladké cestě se neustále zdokonaluji a hledám nové
                inspirace, aby mé dezerty přinášely radost a potěšení každému,
                kdo je ochutná.
              </p>
              <p>
                Mým cílem je poskytnout zákazníkům dorty a jiné pochoutky, které
                nejen vynikají chutí, ale také krásně vypadají, a to na různé
                příležitosti, jako jsou narozeniny, svatby, oslavy a další
                speciální události.
              </p>
              <p>
                Děkuji, že jste se zastavili na mé stránce a ráda bych vás
                pozvala na chuťovou výpravu plnou sladkých pochoutek!
              </p>

              <p>Vaše Lenka - Pekařka srdcem a duší.</p>
            </div>
            <div className={col}>
              {/* <img src={img} /> */}
              <img src={img1} />
              {/* <img src={img2} /> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
