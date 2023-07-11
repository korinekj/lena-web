import React from "react";
import GoogleMap from "../components/GoogleMap";
import Layout from "../components/Layout";

import * as global from "../assets/css/global.module.scss";
import * as styles from "../pages/kontakt.module.scss";

export default function Kontakt() {
  const { container } = global;
  const { kontaktHeroImg, headline, contactForm, formRow } = styles;

  return (
    <Layout>
      <section className={undefined}>
        <section id={kontaktHeroImg}>
          <div className={`${container}`}>
            <h1 id={headline}>Kontakt</h1>
          </div>
        </section>
        <div className={container}>
          <section id={contactForm}>
            <h2>Kontaktujte mě</h2>
            <form>
              <div className={formRow}>
                <label htmlFor='fname'>Jméno</label>
                <input type='text' id='fname' required />
              </div>

              <div className={formRow}>
                <label htmlFor='lname'>Příjmení</label>
                <input type='text' id='lname' required />
              </div>

              <div className={formRow}>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' required />
              </div>

              <div className={formRow}>
                <label htmlFor='message'>Vaše zpráva</label>
                <textarea id='message' rows={10} required></textarea>
              </div>

              <button type='submit'>Odeslat</button>
            </form>
          </section>
          <GoogleMap />
        </div>
      </section>
    </Layout>
  );
}
