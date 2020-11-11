import styled from 'styled-components';
import media from 'styled-media-query';
import { Button, FormControl } from 'react-bootstrap';
import { Search } from '@styled-icons/heroicons-outline';

export const Styles = styled.div`
  .navbar {
    display: flex;
    overflow: hidden;
    position: fixed;
    top: 0;
    
    width: 100%;
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;

    background: #FAFAFA;
  }

  .form {
    display: inline-flexbox;
    margin: 0 auto;

    ${media.lessThan('medium')`
      flex: 1;
      display: flex;
      justify-content: flex-end;
    `}
  }

  .show {
    max-width: 100%;
  }

  .hide {
    max-width: 0;
  }
`;

export const Logo = styled.a`
  font-family: 'Fredoka One';
  font-size: 38px;
  line-height: 0;
  color: black;

  transition: max-width .4s cubic-bezier(1.0, 0.86, 0.0, 1.0);

  &:hover {
    color: black;
    text-decoration: none;
  }
`;

export const SearchButton = styled(Button)`
  padding: 0;
  width: 38px;
  height: 38px;
  border-radius: 13px;
`;

export const SearchField = styled(FormControl)`
  margin-right: 8px;
  height: 38px;
  
  border-width: 2px;
  border-color: #C4C4C4;
  border-radius: 13px;

  font-family: 'Roboto';
  color: #000000;

  ::placeholder, ::-ms-input-placeholder {
    color: "#C4C4C4";
    opacity: 1;
  }

  ${media.lessThan('medium')`
    margin-right: -38px;
    width: 38px;

    opacity: 0;
    z-index: 5;
    cursor: pointer;

    transition: all .4s cubic-bezier(1.0, 0.86, 0.0, 1.0);
    
    &:focus {
      flex: 1;
      opacity: 1;
      cursor: text;
    }

    &:focus ~ ${SearchButton} {
      z-index: 6;
    }
  `}
`;

export const DownloadButton = styled(Button)`
  height: 38px;
  border-radius: 13px;

  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const SearchIcon = styled(Search)`
  color: "#C4C4C4";
`;
