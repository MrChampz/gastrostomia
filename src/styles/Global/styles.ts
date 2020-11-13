import styled, { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

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
`;

export const Pages = styled.div`
  margin-top: 100px;
`;