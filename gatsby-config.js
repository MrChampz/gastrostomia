/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Gastrostomia`,
    author: `UpCO`,
    description: `Site institucional direcionado ao público com Gastrostomia.`,
    siteUrl: `https://gastrostomia.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:400,700`,
          `Fredoka One\:400`,
          `Itim\:400`,
          `Bebas Neue\:400`,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "posts",
        engine: "flexsearch",
        engineOptions: {
          encode: "icase",
          tokenize: "forward",
          async: false,
        },
        query: `
          {
            allMdx {
              nodes {
                id
                fields { slug }
                excerpt
                rawBody
                frontmatter {
                  title
                  description
                  topic
                  thumb {
                    publicURL
                  }
                }
              }
            }
          }
        `,
        ref: "id",
        index: ["title", "topic"],
        store: ["id", "slug", "title", "excerpt", "description", "topic", "thumb"],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map(node => ({
            id: node.id,
            slug: node.fields.slug,
            rawBody: node.rawBody,
            excerpt: node.excerpt,
            title: node.frontmatter.title,
            description: node.frontmatter.description,
            topic: node.frontmatter.topic,
            thumb: node.frontmatter.thumb,
          })),
      },
    },
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${ __dirname }/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${ __dirname }/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false
            },
          },
          `gatsby-remark-image-attributes`,
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gastrostomia`,
        short_name: `Gastrostomia`,
        start_url: `/`,
        background_color: `#007bff`,
        theme_color: `#007bff`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
  ],
}
