import React from "react"
import { Container } from "react-bootstrap";

import { GlobalStyles, Styles, Pages } from "../styles/Global/styles";
import NavBar from "../components/NavBar";
import Home from './Home';

export default function App() {
  return (
    <Styles>
      <GlobalStyles />
      <Container fluid>
        <NavBar />
        <Pages>
          <Home />
        </Pages>
      </Container>
    </Styles>
  );
}