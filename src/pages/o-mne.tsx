import React from "react";
import Layout from "../components/Layout";

import * as global from "../assets/css/global.module.scss";

function About() {
  const { container } = global;

  return (
    <Layout>
      <section className={undefined}>
        <div className={container}>
          <h1>Stránka o mě</h1>
          <div>
            <p>
              Ahoj, mé jméno je Lenka a pečení dortů je mým koníčkem. Mým cílem
              je poskytnout zákazníkům dorty, které nejen vynikají chutí, ale
              také krásně vypadají, a to na různé příležitosti, jako jsou
              narozeniny, svatby, oslavy a další speciální události.
            </p>
            <p>
              Od své babičky jsem se v malém městě [Počátky], kde jsem
              vyrůstala, naučila vařit a péct. Pečení dortů pro mě znamená vášeň
              a ráda experimentuji s novými recepty.
            </p>
            <p>
              Pokud hledáte někoho, kdo pro Vás vytvoří ten nejkrásnější a
              nejchutnější dort na Vaší další speciální událost, neváhejte mě
              kontaktovat. Těším se na spolupráci s Vámi!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
