import React, { useState } from 'react';
import { useMedia } from 'react-media';
import { Navbar, Form } from 'react-bootstrap';
import { MediaQueries } from '../../utils/config';

import {
  Styles,
  Logo,
  SearchField,
  SearchButton,
  DownloadButton,
  SearchIcon
} from './styles';

export default function NavBar() {
  const isSmallScreen = useMedia({ query: MediaQueries.medium });

  const [showLogo, setShowLogo] = useState(true);

  const onSearchFieldFocus = () => {
    if (isSmallScreen) {
      setShowLogo(false);
    }
  }

  const onSearchFieldBlur = () => {
    if (!showLogo) {
      setShowLogo(true);
    }
  }

  return (
    <Styles>
      <Navbar expand="lg">
        <Logo href="" className={ showLogo ? "show" : "hide" }>
          Gastrostomia
        </Logo>
        <Form className="form">
          <SearchField
            type="text"
            placeholder="Comece digitando algo.."
            onBlur={ onSearchFieldBlur }
            onFocus={ onSearchFieldFocus }
          />
          <SearchButton>
            <SearchIcon size={ 24 } />
          </SearchButton>
        </Form>
        <DownloadButton className="ml-auto">Baixar Cartilha</DownloadButton>
      </Navbar>
    </Styles>
  );
}