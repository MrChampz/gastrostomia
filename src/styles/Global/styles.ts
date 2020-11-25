import styled, { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';
import { Container } from 'react-bootstrap';

export const GlobalStyles = createGlobalStyle`
  html, div {
    background: #FAFAFA;
  }
`;

export const Styles = styled.div`
  .container-fluid {
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 70%;

    ${ media.lessThan('medium')`
      max-width: 90%;
    `}

    ${ media.lessThan('small')`
      max-width: 100%;
    `}
  }

  .fixed-footer {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;

export const Page = styled(Container)`
  margin-top: 100px;
`;

export const TextContainer = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  margin-top: 40px;
  margin-bottom: 300px;
  font-family: 'Itim';
  font-size: 25px;
  color: black;
`;