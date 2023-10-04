import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import type { ZakuskyQueryResult } from "../types/types";

import * as styles from "./dortyGallery.module.scss";

/**
 * GraphQL query to retrieve images from the "assets/zakusky" folder.
 */
const query = graphql`
  query ZakuskyQuery {
    allFile(filter: { sourceInstanceName: { eq: "zakusky" } }) {
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

function ZakuskyGallery() {
  // Extracting styles using destructuring
  const { imgGallery, img } = styles;

  // Retrieving data with the useStaticQuery hook and the GraphQL query defined above
  const {
    allFile: { nodes },
  } = useStaticQuery<ZakuskyQueryResult>(query);

  return (
    <section className={imgGallery}>
      {nodes.map(({ id, base, publicURL, childImageSharp }) => {
        const nameWithoutExtension = base.replace(/\.[^/.]+$/, "");

        return (
          <article key={id} className={img}>
            <a
              href={publicURL}
              data-lightbox='zakusky'
              data-title={nameWithoutExtension}
            >
              <GatsbyImage
                image={childImageSharp.gatsbyImageData}
                alt={nameWithoutExtension}
              />
            </a>
          </article>
        );
      })}
    </section>
  );
}

export default ZakuskyGallery;
