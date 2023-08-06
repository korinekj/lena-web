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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dorty`,
        path: `${__dirname}/src/assets/images/dorty`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `zakusky`,
        path: `${__dirname}/src/assets/images/zakusky`,
      },
    },
  ],
};
