import React from "react"
import { Container } from "react-bootstrap";

import PostCard from "../../components/PostCard";

export default function Home() {
  return (
    <Container>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Container>
  );
}
