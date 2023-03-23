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
      {data.allFile.nodes.map((item) => (
        <article key={item.id} className={styles.img}>
          <a href={item.publicURL}>
            <GatsbyImage
              image={item.childImageSharp.gatsbyImageData}
              alt={item.base}
            />
          </a>
        </article>
      ))}
    </section>
  );
}

const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "dorty" } }) {
      nodes {
        id
        base
        publicURL
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 250)
        }
      }
    }
  }
`;

export default DortyGallery;
