import React from 'react'

import {
  Styles,
  ImageContainer,
  Image,
  Content,
  Topic,
  Title,
  Description,
} from './styles';

export default function PostCard({ post }) {
  const link = `/posts${ post.fields.slug }`;
  const data = post.frontmatter;

  return (
    <Styles>
      <ImageContainer>
        <Image src={ data.thumb.publicURL } alt={ data.title } />
      </ImageContainer>
      <Content>
        <Topic>{ data.topic }</Topic>
        <Title to={ link }>{ data.title }</Title>
        <Description>{ data.description }</Description>
      </Content>
    </Styles>
  );
}