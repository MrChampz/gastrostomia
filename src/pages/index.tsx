import React from "react"
import { Container } from "react-bootstrap";

import { Styles, Pages } from "./styles";
import NavBar from "../components/NavBar";
import Home from './Home';

export default function App() {
  return (
    <Styles>
      <Container fluid>
        <NavBar />
        <Pages>
          <Home />
        </Pages>
      </Container>
    </Styles>  
  );
}