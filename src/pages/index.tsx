import React from "react"
import { Container } from "react-bootstrap";

import { Styles } from "./styles";
import NavBar from "../components/NavBar";
import Home from './Home';

export default function App() {
  return (
    <Styles>
      <Container fluid>
        <NavBar />
        <Home />
      </Container>
    </Styles>  
  );
}