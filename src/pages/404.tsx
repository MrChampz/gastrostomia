import React from 'react';
import { Container } from "react-bootstrap";

import { GlobalStyles, Styles, Page, TextContainer, Text } from "../styles/Global/styles";
import { NavBar, Footer, SEO } from "../components";

export default function NotFound() {
  return (
    <Styles>
      <SEO title="Página não encontrada" />
      <GlobalStyles />
      <Container fluid>
        <NavBar showSearch={ false } alwaysShowDownload />
        <Page>
          <TextContainer>
            <Text>Página não encontrada =(</Text>
          </TextContainer>
        </Page>
        <Footer className="fixed-footer" />
      </Container>
    </Styles>
  );
}