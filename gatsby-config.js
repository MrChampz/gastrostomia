/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`]
          },
          {
            family: `Fredoka One`,
            variants: [`400`]
          },
          {
            family: `Itim`,
            variants: [`400`]
          },
          {
            family: `Bebas Neue`,
            variants: [`400`]
          }
        ],
      },
    },
  ],
}
