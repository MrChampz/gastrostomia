import React from "react"
import { Container } from "react-bootstrap";
import NavBar from "../../components/NavBar";

export default function Home() {
  return (
    <Container fluid>
      <NavBar />
      <Container style={{ backgroundColor: 'red' }}>
        Vamos de H1
      </Container>
    </Container>
  );
}
