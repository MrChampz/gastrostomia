import styled from 'styled-components';
import { Button, FormControl } from 'react-bootstrap';
import { Search } from '@styled-icons/heroicons-outline';

export const Logo = styled.a`
  font-family: 'Fredoka One';
  font-size: 38px;
  color: black;

  &:hover {
    color: black;
    text-decoration: none;
  }
`;

export const SearchField = styled(FormControl)`
  margin-right: 8px;
  min-width: 300px;
  height: 38px;
  
  border-width: 2px;
  border-color: "#C4C4C4";
  border-radius: 13px;

  font-family: 'Roboto';
  color: "#000000";

  ::placeholder, ::-ms-input-placeholder {
    color: "#C4C4C4";
    opacity: 1;
  }
`;

export const SearchButton = styled(Button)`
  padding: 0;
  width: 38px;
  height: 38px;
  border-radius: 13px;
`;

export const DownloadButton = styled(Button)`
  height: 38px;
  border-radius: 13px;
`;

export const SearchIcon = styled(Search)`
  color: "#C4C4C4";
`;
