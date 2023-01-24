import * as React from "react";
import Layout from "../components/Layout";

import * as global from "../assets/css/index.module.scss";
import HeroImage from "../components/HeroImage";

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroImage />
      </main>
    </Layout>
  );
}
