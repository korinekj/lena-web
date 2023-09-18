import * as React from "react";
import Layout from "../components/Layout";

import HeroImage from "../components/HeroImage";
import Nabidka from "../components/Nabidka";

import "normalize.css";

export default function Home() {
  return (
    <Layout>
      <HeroImage />
      <Nabidka />
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>Mlsání od Léni</title>
    <meta
      name='description'
      content='Mlsání od Léni - Objednejte si jedinečné dorty na zakázku a vychutnejte si neodolatelné dezerty od Lenky. Žirovnice | Pelhřimov | Vysočina.'
    />
  </>
);
