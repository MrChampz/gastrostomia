import React from 'react';
import { Container } from 'react-bootstrap';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { NavBar, Footer } from '../components';

import {
  Styles,
  GlobalStyles,
  Pages,
  Content,
  Title,
  Separator
} from '../styles/Page/styles';

export default function Post(props) {
  const post = props.data.mdx;
  const title = props.data.site.siteMetadata.title;
  
  return (
    <Styles>
      <GlobalStyles />
      <Container fluid>
        <NavBar alwaysShowDownload showSearch={ false } />
        <Pages>
          <Container>
            <Content>
              <Title>{ post.frontmatter.title }</Title>
              <MDXRenderer>{ post.body }</MDXRenderer>
            </Content>
            <Separator />
          </Container>
        </Pages>
        <Footer />
      </Container>
    </Styles>
  );
}

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`