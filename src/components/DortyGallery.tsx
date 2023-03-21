import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

function DortyGallery() {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const data = useStaticQuery(query);

  console.log(data);

  return (
    <div>
      {data.allFile.nodes.map((item, index) => (
        <div key={index}>
          <GatsbyImage
            image={item.childImageSharp.gatsbyImageData}
            alt='test'
          />
        </div>
      ))}
    </div>
  );
}

const query = graphql`
  {
    allFile(
      filter: { sourceInstanceName: { eq: "dorty" }, extension: { eq: "jpeg" } }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED

            width: 500
          )
        }
      }
    }
  }
`;

export default DortyGallery;
