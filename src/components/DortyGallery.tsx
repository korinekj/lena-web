import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import type { DortyQueryResult } from "../types/types.js";

import * as styles from "./dortyGallery.module.scss";

/**
 * GraphQL query to retrieve images from the "assets/dorty" folder.
 */
const query = graphql`
  query {
    DortImage: allFile(
      filter: { sourceInstanceName: { eq: "dorty" } }
      sort: { changeTime: ASC }
    ) {
      nodes {
        id
        base
        publicURL
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 250)
        }
      }
    }

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

  const data = useStaticQuery(query);
  console.log(data);

  // Retrieving data with the useStaticQuery hook and the GraphQL query defined above
  // const {
  //   allFile: { nodes },
  // } = useStaticQuery<DortyQueryResult>(query);

  // Rendering a gallery section
  return (
    <section className={imgGallery}>
      {/* {nodes.map(({ id, publicURL, childImageSharp, base }) => {
        const nameWithoutExtension = base.replace(/\.[^/.]+$/, "");

        return (
          <article key={id} className={img}>
            <a
              href={publicURL}
              data-lightbox='dorty'
              data-title={nameWithoutExtension}
            >
              <GatsbyImage
                image={childImageSharp.gatsbyImageData}
                alt={nameWithoutExtension}
              />
            </a>
          </article>
        );
      })} */}
      {data.ContentfulCakes.nodes[0].cake.map((cake) => {
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
      })}
    </section>
  );
}

export default DortyGallery;
