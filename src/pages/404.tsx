import React from 'react';
import { Container } from "react-bootstrap";

import { GlobalStyles, Styles, Page, NotFoundContainer } from "../styles/Global/styles";
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
            <h1>Página não encontrada =(</h1>
          </NotFoundContainer>
        </Page>
        <Footer className="fixed-footer" />
      </Container>
    </Styles>
  );
}