import React from "react";
import { Container } from "react-bootstrap";
import { graphql } from "gatsby";

import { GlobalStyles, Styles, Page } from "../styles/Global/styles";
import { NavBar, Footer, PostCard, DownloadCard, SEO } from "../components";

export default function Index(props) {
  const { data } = props;
  const posts = data.allMdx.edges;

  return (
    <Styles>
      <SEO title="Todos os posts" />
      <GlobalStyles />
      <Container fluid>
        <NavBar />
        <Page>
          <DownloadCard />
          { posts.map(({ node }) => (
              <PostCard key={ node.fields.slug } post={ node } />
            ))
          }
        </Page>
        <Footer />
      </Container>
    </Styles>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            topic
            date
            thumb {
              publicURL
            }
          }
        }
      }
    }
  }
`