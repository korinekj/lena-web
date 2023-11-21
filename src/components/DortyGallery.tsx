import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import type { DortyQueryResult } from "../types/types.js";

import * as styles from "./dortyGallery.module.scss";

/**
 * GraphQL query to retrieve images from the "assets/dorty" folder.
 */
const query = graphql`
  query {
    ContentfulCakes: allContentfulCake(sort: { cake: { updatedAt: ASC } }) {
      nodes {
        cake {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          title
          id
          publicUrl
        }
      }
    }
  }
`;

function DortyGallery() {
  // Extracting styles using destructuring
  const { imgGallery, img } = styles;

  // Destructuring assignment to extract data from the result of the useStaticQuery hook
  const {
    ContentfulCakes: {
      nodes: [{ cake }],
    },
  } = useStaticQuery(query);

  // Rendering a gallery section
  return (
    <section className={imgGallery}>
      {cake.map(
        (cake: {
          id: React.Key | null | undefined;
          publicUrl: string | undefined;
          title: string;
          gatsbyImageData: IGatsbyImageData;
        }) => {
          return (
            <article key={cake.id} className={img}>
              <a
                href={cake.publicUrl}
                data-lightbox='dorty'
                data-title={cake.title}
              >
                <GatsbyImage image={cake.gatsbyImageData} alt={cake.title} />
              </a>
            </article>
          );
        }
      )}
    </section>
  );
}

export default DortyGallery;
