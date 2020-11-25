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
  return (
    <Styles>
      <ImageContainer>
        <Image src={ post.thumb.publicURL } alt={ post.title } />
      </ImageContainer>
      <Content>
        <Topic>{ post.topic }</Topic>
        <Title to={ `/posts${ post.slug }` }>{ post.title }</Title>
        <Description>{ post.description }</Description>
      </Content>
    </Styles>
  );
}