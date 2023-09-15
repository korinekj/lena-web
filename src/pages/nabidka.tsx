import React from "react";
import Layout from "../components/Layout";

import NabidkaComponent from "../components/Nabidka";

function Nabidka() {
  return (
    <Layout>
      <NabidkaComponent />
    </Layout>
  );
}

export default Nabidka;

export const Head = () => (
  <>
    <title>Naše Dezerty - Sladká Nabídka | Mlsání od Léni</title>
    <meta
      name='description'
      content='Prohlédněte si naši širokou nabídku dezertů a dortů na zakázku. Najděte si svůj oblíbený požitek pro chuťové buňky.'
    />
  </>
);
