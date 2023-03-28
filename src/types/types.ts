import { IGatsbyImageData } from "gatsby-plugin-image";

/**
 * Defines the expected structure of data returned by a GraphQL query that retrieves image files from the "dorty" folder.
 */
export interface QueryResult {
  allFile: {
    nodes: {
      id: string;
      base: string;
      publicURL: string;
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    }[];
  };
}
