import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';
import { Button, FormControl } from 'react-bootstrap';
import { Search } from '@styled-icons/heroicons-outline';

export const Styles = styled.div`
  .navbar {
    display: flex;
    justify-content: space-between;

    overflow: hidden;
    position: fixed;
    top: 0;
    
    width: 100%;
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;

    background: white;
    border-bottom: 1px solid #EBEBEB;

    transition: all 0.1s ease-in;
    z-index: 999;
  }

  .form {
    display: inline-flexbox;
    margin: 0 auto;

    ${ media.lessThan('medium')`
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

  .shadow {
    -webkit-box-shadow: 0 0px 3px rgba(0,0,0,0.12);
    -moz-box-shadow: 0 0px 3px rgba(0,0,0,0.12);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12);
  }

  .no-shadow {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
`;

export const Logo = styled(Link)`
  height: 38px;

  font-family: 'Bebas Neue';
  font-size: 38px;
  line-height: 44px;
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

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchField = styled(FormControl)`
  margin-right: 8px;
  height: 38px;
  
  border-width: 1px;
  border-color: #C4C4C4;
  border-radius: 13px;

  font-family: 'Roboto';
  color: #000000;

  ::placeholder, ::-ms-input-placeholder {
    color: "#C4C4C4";
    opacity: 1;
  }

  ${ media.lessThan('medium')`
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

export const SearchIcon = styled(Search)`
  color: #FFFFFF;
`;
