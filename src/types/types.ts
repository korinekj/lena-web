import { IGatsbyImageData } from "gatsby-plugin-image";

/**
 * Defines the expected structure of data returned by a GraphQL query that retrieves image files from the "dorty" folder.
 */
export interface DortyQueryResult {
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

/**
 * Defines the expected structure of data returned by a GraphQL query that retrieves image files from the "zakusky" folder.
 */
export interface ZakuskyQueryResult {
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

/**
 * Defines the expected structure of data returned by a GraphQL query that retrieves image files from the "kontakt" folder.
 */
export interface KontaktyQueryResult {
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
