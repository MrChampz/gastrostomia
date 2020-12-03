import styled from 'styled-components';
import media from 'styled-media-query';
import { MailOutline } from '@styled-icons/material';
import { Link as GatsbyLink } from 'gatsby';

export const Styles = styled.div`
  height: 88px;
  padding: 10px 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('medium')`
    flex-direction: column-reverse;
  `}

  .buttons-container-margin {
    ${media.lessThan('medium')`
      margin-bottom: 20px;
    `}
  }

  .buttons-margin {
    margin-left: 15px;
  }

  .left-container {
    justify-content: flex-start;

    ${media.lessThan('medium')`
      justify-content: center;
    `}
  }

  .center-container {
    justify-content: center;

    ${media.lessThan('medium')`
      justify-content: center;
    `}
  }

  .right-container {
    justify-content: flex-end;

    ${media.lessThan('medium')`
      justify-content: center;
    `}
  }
`;

export const Container = styled.div`
  min-width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  
  ${media.lessThan('medium')`
    justify-content: center;
  `}
`;

export const Text = styled.span`
  font-family: 'Roboto';
  font-size: 16px;
  color: #6B6B6B;
`;

export const Title = styled.span`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: #404040;
`;

export const Link = styled(GatsbyLink)`
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

export const ExternLink = styled.a`
  font-family: 'Roboto';
  font-size: 16px;
  color: #6B6B6B;

  &:hover {
    text-decoration: none;
    color: #3D3D3D;
  }
`;

export const CreditsButton = styled.button`
  padding: 0;
  margin-left: 5px;

  font-family: 'Roboto';
  font-weight: bold;
  font-size: 16px;
  color: #6B6B6B;
  background: none;
  border: none;

  &:hover {
    color: #3D3D3D;
  }

  &:active, &:focus {
    box-shadow: none;
    outline: none;
  }
`;

export const MailIcon = styled(MailOutline)`
  color: #C4C4C4;
`;

export const MailButton = styled.a`
  padding: 0;
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

  &:focus, &:active {
    background: #424242 !important;

    -webkit-box-shadow: 0px 0px 1x 2px #d4d4d4 !important;
    -moz-box-shadow: 0px 0px 1px 2px #d4d4d4 !important;
    box-shadow: 0px 0px 1px 2px #d4d4d4 !important;
  }

  &:hover ${MailIcon} {
    color: #B0B0B0;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .content-margin {
    margin-bottom: 10px;
  }
`;