import React from 'react';
import { Navbar, Form } from 'react-bootstrap';

import { Styles, Logo, SearchField, SearchButton, DownloadButton, SearchIcon } from './styles';

export default function NavBar() {
  return (
    <Styles>
      <Navbar expand="lg">
          <Logo href="">Gastrostomia</Logo>
          <Form className="form-center">
            <SearchField type="text" placeholder="Comece digitando algo.." className="" />
            <SearchButton>
              <SearchIcon size={ 24 } />
            </SearchButton>
          </Form>
          <DownloadButton className="ml-auto">Baixar Cartilha</DownloadButton>
      </Navbar>
    </Styles>
  );
}