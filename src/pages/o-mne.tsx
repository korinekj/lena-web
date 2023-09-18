import React from "react";
import Layout from "../components/Layout";

import * as global from "../assets/css/global.module.scss";
import * as styles from "../pages/o-mne.module.scss";

import img1 from "../assets/images/o-mne/resized/compressed/image00002.jpeg";

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
                speciální události. Mé pekařské dovednosti a vášeň pro vytváření
                těchto lahodností jsou zakotveny ve městě, které mi je domovem -
                krásné Žirovnici. Toto malebné městečko se nachází na Vysočině v
                okrese Pelhřimov.
              </p>
              <p>
                Děkuji, že jste se zastavili na mé stránce a ráda bych vás tímto
                pozvala na chuťovou výpravu plnou sladkých pochoutek!
              </p>

              <p>
                <i>Vaše Lenka - Pekařka srdcem a duší.</i>
              </p>
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

export const Head = () => (
  <>
    <title>O mně | Mlsání od Léni</title>
    <meta
      name='description'
      content='Poznejte tvář a příběh za pečením. Lenka vás zve do svého sladkého světa a vášně pro dorty.'
    />
  </>
);
