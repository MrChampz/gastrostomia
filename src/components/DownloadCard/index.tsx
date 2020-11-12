import React from 'react'

import {
  Styles,
  Image,
  Content,
  Title,
  Description,
  DownloadButton,
} from './styles';

import menino from '../../../content/assets/menino.png';

export default function DownloadCard() {
  return (
    <Styles>
      <Image src={ menino } alt="Thumb do post" />
      <Content>
        <Title>Baixe nossa cartilha!</Title>
        <Description>
          Assim fica mais fácil compartilhar com quem precisa, além de que todo
          o conteúdo do nosso site também está presente na cartilha! =D
        </Description>
        <DownloadButton className="ml-auto">Baixar Cartilha</DownloadButton>
      </Content>
    </Styles>
  );
}