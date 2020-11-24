import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: any[];
  keywords?: string[];
}

export default function SEO(props: SEOProps) {
  const { description, lang, meta, keywords, title } = props;

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const desc = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={ title }
      titleTemplate={ `%s | ${ site.siteMetadata.title }` }
      meta={[
        {
          name: `description`,
          content: desc,
        },
        {
          name: `og:title`,
          content: title,
        },
        {
          name: `og:description`,
          content: desc,
        },
        {
          name: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: desc,
        },
      ].concat(
        keywords.length > 0
        ? {
            name: `keywords`,
            content: keywords.join(`, `),
          }
        : []
      ).concat(meta)}
    />
  );
}

SEO.defaultProps = {
  description: ``,
  lang: `pt-BR`,
  meta: [],
  keywords: [],
}