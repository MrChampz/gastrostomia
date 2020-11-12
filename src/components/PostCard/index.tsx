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

import menino from '../../../content/assets/menino.png';

export default function PostCard() {
  return (
    <Styles>
      <ImageContainer>
        <Image src={ menino } alt="Thumb do post" />
      </ImageContainer>
      <Content>
        <Topic>Cuidados</Topic>
        <Title href="#">Direitos da Criança com Gastrostomia</Title>
        <Description>
          Você sabia que a criança com gastrostomia tem direitos?
          Venha conhecer todos os seus direitos, desde de antes da
          cirurgia até o retorno das atividades em casa.
        </Description>
      </Content>
    </Styles>
  );
}