/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Templeton-Christmann Wedding`,
    author: {
      name: `iDiva.IT`,
      summary: `Eclectic websites for a unique place.`,
    },
    description: `A website for the wedding of Carolyn-Anne Templeton and Andrew Christmann.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-decap-cms`,
    `gatsby-plugin-netlify`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Josefin Sans`,
            file: `https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/lodging`,
        name: `lodging`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/faq`,
        name: `faq`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Templeton-Christmann Wedding`,
        short_name: `TC Wedding`,
        start_url: `/`,
        // background_color: `#ffffff`,
        // // This will impact how browsers show your PWA/website
        // // https://css-tricks.com/meta-theme-color-and-trickery/
        // // theme_color: `#663399`,
        // display: `minimal-ui`,
        icon: `src/images/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
