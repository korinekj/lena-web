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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `kontakty`,
        path: `${__dirname}/src/assets/images/kontakty`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mlsání od Léni`,
        short_name: `Mls`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/assets/images/favicons/favicon-32x32.png",
        icons: [
          {
            src: `src/assets/images/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/assets/images/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};
