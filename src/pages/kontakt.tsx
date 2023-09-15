import React from "react";
import GoogleMap from "../components/GoogleMap";
import Layout from "../components/Layout";

import * as global from "../assets/css/global.module.scss";
import * as styles from "../pages/kontakt.module.scss";

import img1 from "../assets/images/dorty/resized/compressed/Dort zdobený jahodami a čokoládou.jpeg";
import img2 from "../assets/images/dorty/resized/compressed/Dort se spoustou ovoce jahody maliny a kousky kinder bueno a kinder čokolády.jpeg";
import img3 from "../assets/images/dorty/resized/compressed/Bílý dort s jahodami a ovocem nahoře.jpeg";
import img4 from "../assets/images/dorty/resized/compressed/Bílý svatební dort s bílými květy nahoře.jpeg";
import img5 from "../assets/images/dorty/resized/compressed/Třípatrový dort zdobený jahodami a lesním ovocem.jpeg";
import img6 from "../assets/images/dorty/resized/compressed/Dort ve tvaru srdce s čokoládou a oreos navrchu.jpeg";

//import Test from "../components/Test";

export default function Kontakt() {
  const { container } = global;
  const {
    kontaktHeroImg,
    headline,
    contactForm,
    formRow,
    wrapper,
    cake,
    heading,
  } = styles;

  // const images = [
  //   "image00062.jpeg",
  //   "image00065.jpeg",
  //   "image00053.jpeg",
  //   "image00059.jpeg",
  //   "image00055.jpeg",
  //   "image00047.jpeg",
  // ];

  const imageUrls = [img1, img2, img3, img4, img5, img6];

  return (
    <Layout>
      {/* <Test /> */}
      <section className={undefined}>
        <section id={kontaktHeroImg}>
          <div className={`${container}`}>
            <h2 id={headline}>Kontakt</h2>
          </div>
        </section>
        <div className={container}>
          <h1 className={heading}>Kontaktujte mě</h1>

          <div className={wrapper}>
            <section id={contactForm}>
              <form
                action='https://formsubmit.co/7c001bac3a554503f9ba4b35ae1fdf77'
                method='POST'
              >
                <div className={formRow}>
                  <label htmlFor='fname'>Jméno</label>
                  <input type='text' id='fname' name='jméno' required />
                </div>
                <div className={formRow}>
                  <label htmlFor='lname'>Příjmení</label>
                  <input type='text' id='lname' name='příjmení' required />
                </div>
                <div className={formRow}>
                  <label htmlFor='email'>Email</label>
                  <input type='email' id='email' name='email' required />
                </div>
                <div className={formRow}>
                  <label htmlFor='zpráva'>Vaše zpráva</label>
                  <textarea
                    id='message'
                    rows={10}
                    name='message'
                    required
                  ></textarea>
                </div>
                <button type='submit'>Odeslat</button>

                <input
                  type='hidden'
                  name='_next'
                  value='http://localhost:8000/formular-odeslan'
                ></input>
              </form>
            </section>

            <section id={cake}>
              {imageUrls.map((imageUrl, index) => {
                const fileName = imageUrl.split("/").pop().split("-")[0];

                return (
                  <figure key={index}>
                    <a
                      href={imageUrl}
                      data-lightbox='dort'
                      data-title={fileName}
                    >
                      <img src={imageUrl} alt={fileName} />
                    </a>
                  </figure>
                );
              })}
            </section>
          </div>
        </div>
        <GoogleMap />
      </section>
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>Kontakt | Mlsání od Léni</title>
    <meta
      name='description'
      content='Máte dotazy nebo připomínky? Rádi vám odpovíme. Zkontaktujte nás a spojte se s námi.'
    />
  </>
);
