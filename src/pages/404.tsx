import React from 'react';
import { Container } from "react-bootstrap";

import {
  GlobalStyles,
  Styles,
  Page,
  NotFoundContainer,
  NotFoundTitle,
  NotFoundText,
  Emoji,
  Button
} from "../styles/Global/styles";

import { NavBar, Footer, SEO } from "../components";

export default function NotFound() {
  return (
    <Styles>
      <SEO title="Página não encontrada" />
      <GlobalStyles />
      <Container fluid>
        <NavBar showSearch={ false } alwaysShowDownload />
        <Page>
          <NotFoundContainer>
            <Emoji>😔</Emoji>
            <NotFoundTitle>Ooops, página não encontrada</NotFoundTitle>
            <NotFoundText>
              Sentimos muito por isso. Parece que você está tentando
              acessar uma página que foi deletada ou que nunca existiu.
            </NotFoundText>
            <Button to="/" className="btn btn-primary">
              Voltar para a Home
            </Button>
          </NotFoundContainer>
        </Page>
        <Footer className="fixed-footer" />
      </Container>
    </Styles>
  );
}