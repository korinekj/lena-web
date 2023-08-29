import React from "react";
import GoogleMap from "../components/GoogleMap";
import Layout from "../components/Layout";

import * as global from "../assets/css/global.module.scss";
import * as styles from "../pages/kontakt.module.scss";

import img1 from "../assets/images/dorty/image00062.jpeg";
import img2 from "../assets/images/dorty/image00065.jpeg";
import img3 from "../assets/images/dorty/image00053.jpeg";
import img4 from "../assets/images/dorty/image00059.jpeg";
import img5 from "../assets/images/dorty/image00055.jpeg";
import img6 from "../assets/images/dorty/image00047.jpeg";

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

  const url = window.location.origin;

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
              {/* {images.map((image, index) => (
                <a href={test} data-lightbox='dort' data-title={image}>
                  <img
                    src={require(`../assets/images/dorty/${image}`).default}
                    alt={`Image ${index + 1}`}
                    key={index}
                  />
                </a>
              ))} */}
              <figure>
                <a href={img1} data-lightbox='dort' data-title={img1}>
                  <img src={img1} alt={img1} />
                </a>
              </figure>
              <figure>
                <a href={img2} data-lightbox='dort' data-title={img2}>
                  <img src={img2} alt={img2} />
                </a>
              </figure>
              <figure>
                <a href={img3} data-lightbox='dort' data-title={img3}>
                  <img src={img3} alt={img3} />
                </a>
              </figure>
              <figure>
                <a href={img4} data-lightbox='dort' data-title={img4}>
                  <img src={img4} alt={img4} />
                </a>
              </figure>
              <figure>
                <a href={img5} data-lightbox='dort' data-title={img5}>
                  <img src={img5} alt={img5} />
                </a>
              </figure>
              <figure>
                <a href={img6} data-lightbox='dort' data-title={img6}>
                  <img src={img6} alt={img6} />
                </a>
              </figure>
            </section>
          </div>
        </div>
        <GoogleMap />
      </section>
    </Layout>
  );
}
