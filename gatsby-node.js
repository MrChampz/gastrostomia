const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {

  const { createPage } = actions;

  const blogPost = path.resolve(`src/templates/post.tsx`);

  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    
    if (result.errors) {
      throw result.errors;
    }

    // Create post pages.
    const posts = result.data.allMdx.edges;

    posts.forEach(post => {
      createPage({
        path: `posts${ post.node.fields.slug }`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug
        },
      })
    })

    return null;
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {

  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
}