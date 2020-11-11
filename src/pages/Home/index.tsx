import React from "react"
import { Container } from "react-bootstrap";

import { Styles } from './styles';

import PostCard from "../../components/PostCard";

export default function Home() {
  return (
    <Styles>
      <Container>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Container>
    </Styles>
  );
}
