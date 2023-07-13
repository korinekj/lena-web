import React from "react";
import GoogleMap from "../components/GoogleMap";
import Layout from "../components/Layout";

import * as global from "../assets/css/global.module.scss";
import * as styles from "../pages/kontakt.module.scss";
import { Link } from "gatsby";

import test from "../assets/images/dorty/image00001.jpeg";

//import Test from "../components/Test";

export default function Kontakt() {
  const { container } = global;
  const { kontaktHeroImg, headline, contactForm, formRow, wrapper, cake } =
    styles;

  const images = [
    "image00062.jpeg",
    "image00065.jpeg",
    "image00053.jpeg",
    "image00059.jpeg",
    "image00055.jpeg",
    "image00047.jpeg",
  ];

  return (
    <Layout>
      {/* <Test /> */}
      <section className={undefined}>
        <section id={kontaktHeroImg}>
          <div className={`${container}`}>
            <h1 id={headline}>Kontakt</h1>
          </div>
        </section>
        <div className={container}>
          <h2>Kontaktujte mě</h2>

          <div className={wrapper}>
            <section id={contactForm}>
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
            <section id={cake}>
              {images.map((image, index) => (
                <a href={test} data-lightbox='dort' data-title={image}>
                  <img
                    src={require(`../assets/images/dorty/${image}`).default}
                    alt={`Image ${index + 1}`}
                    key={index}
                  />
                </a>
              ))}
            </section>
          </div>
          <GoogleMap />
        </div>
      </section>
    </Layout>
  );
}
