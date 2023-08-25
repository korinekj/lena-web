/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Roboto:400,500,700", // Replace with your selected font and weights
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dorty`,
        path: `${__dirname}/src/assets/images/dorty/resized/compressed`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `zakusky`,
        path: `${__dirname}/src/assets/images/zakusky/resized/compressed`,
      },
    },
  ],
};
