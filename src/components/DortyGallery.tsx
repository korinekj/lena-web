import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import * as styles from "./dortyGallery.module.scss";

function DortyGallery() {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const data = useStaticQuery(query);

  console.log(data);

  return (
    <section className={styles.imgWrapper}>
      {data.allFile.nodes.map((item, index) => (
        <article key={index} className={styles.img}>
          <GatsbyImage
            image={item.childImageSharp.gatsbyImageData}
            alt='test'
          />
        </article>
      ))}
    </section>
  );
}

const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "dorty" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 250)
        }
      }
    }
  }
`;

export default DortyGallery;
