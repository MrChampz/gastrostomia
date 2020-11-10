import React from 'react';
import { Navbar, Form } from 'react-bootstrap';

import { Logo, SearchField, SearchButton, DownloadButton, SearchIcon } from './styles';

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg"
      style={{ justifyContent: 'space-between' }}>
        <Logo href="">Gastrostomia</Logo>
        <Form inline>
          <SearchField type="text" placeholder="Comece digitando algo.." />
          <SearchButton>
            <SearchIcon size={ 24 } />
          </SearchButton>
        </Form>
        <DownloadButton>Baixar Cartilha</DownloadButton>
    </Navbar>
  );
}