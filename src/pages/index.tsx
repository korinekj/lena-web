import * as React from "react";
import Layout from "../components/Layout";

import * as styles from "./index.module.scss";

export default function Home() {
  return (
    <>
      <Layout>
        <main className={styles.page}>
          <h1>Main</h1>
        </main>
      </Layout>
      <div>
        <div className={styles.mapContainer}>
          <iframe
            className={styles.map}
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.1213565533553!2d15.19457071585113!3d49.25514568064204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470cd94dfc8f6eab%3A0x4ce636c7d6eaeb9b!2zTmEgVsO9c2x1bsOtIDYzMiwgMzk0IDY4IMW9aXJvdm5pY2U!5e0!3m2!1scs!2scz!4v1673302735256!5m2!1scs!2scz'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </div>
    </>
  );
}
