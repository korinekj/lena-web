import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import * as styles from "./dortyGallery.module.scss";

const query = graphql`
  query DortImage {
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

function DortyGallery() {
  const { imgWrapper, img } = styles;

  const {
    allFile: { nodes },
  } = useStaticQuery(query);

  return (
    <section className={imgWrapper}>
      {nodes.map(({ id, publicURL, childImageSharp, base }) => (
        <article key={id} className={img}>
          <a href={publicURL}>
            <GatsbyImage image={childImageSharp.gatsbyImageData} alt={base} />
          </a>
        </article>
      ))}
    </section>
  );
}

export default DortyGallery;
