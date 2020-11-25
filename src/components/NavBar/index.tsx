import React, { useEffect, useState } from 'react';
import { useMedia } from 'react-media';
import { Navbar, Form } from 'react-bootstrap';
import { MediaQueries } from '../../utils/config';

import { DownloadButton } from '../';

import {
  Styles,
  Logo,
  SearchField,
  SearchButton,
  SearchIcon
} from './styles';

interface NavBarProps {
  alwaysShowDownload: boolean;
  showSearch: boolean;
}

export default function NavBar(props: NavBarProps) {
  const isSmallScreen = useMedia({ query: MediaQueries.medium });

  const [showLogo, setShowLogo] = useState(true);
  const [showBtnDownload, setShowBtnDownload] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.onscroll = onPageScroll;
  }, []);

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

  const onPageScroll = (event) => {
    let offset = event.target.documentElement.scrollTop;
    if (offset == 0) {
      setShowShadow(false);
    }
    if (offset > 0) {
      setShowShadow(true);
    }
    if (offset < 273) {
      setShowBtnDownload(false);
    }
    if (offset >= 273) {
      setShowBtnDownload(true);
    }
  }

  return (
    <Styles>
      <Navbar expand="lg" className={ showShadow ? 'shadow' : 'no-shadow' }>
        <Logo to="/" className={ showLogo ? 'show' : 'hide' }>
          Gastrostomia
        </Logo>
        { props.showSearch &&
          <Form className="form">
            <Form.Control type="hidden" name="search" value={ searchTerm } />
            <SearchField
              type="text"
              placeholder="Comece digitando algo.."
              onBlur={ onSearchFieldBlur }
              onFocus={ onSearchFieldFocus }
              onChange={ event => setSearchTerm(event.target.value) }
            />
            <SearchButton type="submit">
              <SearchIcon size={ 24 } />
            </SearchButton>
          </Form>
        }
        <DownloadButton
          showIcon
          showButton={ showBtnDownload || props.alwaysShowDownload }
          showContainer={ !isSmallScreen }
        />
      </Navbar>
    </Styles>
  );
}

NavBar.defaultProps = {
  alwaysShowDownload: false,
  showSearch: true,
}