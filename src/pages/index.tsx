import React from "react"
import { Container } from "react-bootstrap";

import { GlobalStyles, Styles, Pages } from "../styles/Global/styles";
import { NavBar, Footer } from "../components";
import Home from './home';

export default function App() {
  return (
    <Styles>
      <GlobalStyles />
      <Container fluid>
        <NavBar />
        <Pages>
          <Home />
        </Pages>
        <Footer />
      </Container>
    </Styles>
  );
}