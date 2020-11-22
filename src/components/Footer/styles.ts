import styled from 'styled-components';
import media from 'styled-media-query';
import { Button } from 'react-bootstrap';
import { MailOutline } from '@styled-icons/material';

export const Styles = styled.div`
  height: 88px;
  padding: 10px 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${ media.lessThan('medium')`
    flex-direction: column-reverse;
  `}

  .buttons-margin {
    ${ media.lessThan('medium')`
      margin-bottom: 20px;
    `}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Text = styled.span`
  font-family: 'Roboto';
  font-size: 16px;
  color: #6B6B6B;
`;

export const Link = styled.a`
  margin-left: 5px;

  font-family: 'Roboto';
  font-weight: bold;
  font-size: 16px;
  color: #6B6B6B;

  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: #3D3D3D;
  }
`;

export const MailIcon = styled(MailOutline)`
  color: #C4C4C4;
`;

export const MailButton = styled(Button)`
  padding: 0;
  margin-left: 15px;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 13px;
  background: #E9E9E9;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #D1D1D1;    
  }

  &:hover ${ MailIcon } {
    color: #B0B0B0;
  }
`;