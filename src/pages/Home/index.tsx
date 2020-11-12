import React from "react"
import { Container } from "react-bootstrap";

import { Styles } from './styles';
import { PostCard, DownloadCard } from "../../components";  

export default function Home() {
  return (
    <Styles>
      <Container>
        <DownloadCard />
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
