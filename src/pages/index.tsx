import React from "react";
import { Container } from "react-bootstrap";
import { graphql } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import * as queryString from "query-string";

import { GlobalStyles, Styles, Page, TextContainer, Text } from "../styles/Global/styles";
import { NavBar, Footer, PostCard, DownloadCard, SEO } from "../components";

export default function Index(props) {
  const { data, location } = props;
  const { search } = queryString.parse(location.search);
  const query = search || "";

  const posts = data.allMdx.edges;
  const allPosts = posts.map(({ node }) => ({
    slug: node.fields.slug,
    title: node.frontmatter.title,
    description: node.frontmatter.description,
    topic: node.frontmatter.topic,
    thumb: node.frontmatter.thumb,
  }));

  const localSearchPosts = data.localSearchPosts;
  const results = useFlexSearch(
    query,
    localSearchPosts.index,
    localSearchPosts.store,
  );

  return (
    <Styles>
      <SEO title="Todos os posts" />
      <GlobalStyles />
      <Container fluid>
        <NavBar />
        <Page>
          <DownloadCard />
          { query == "" && allPosts.map(post => (
              <PostCard key={ post.slug } post={ post } />
            ))
          }
          { query != "" && results.length > 0 && results.map(post => (
              <PostCard key={ post.slug } post={ post } />
            ))
          }
          { query != "" && results.length == 0 &&
            <TextContainer>
              <Text>Nenhum resultado encontrado</Text>
            </TextContainer>
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
    localSearchPosts {
      index
      store
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