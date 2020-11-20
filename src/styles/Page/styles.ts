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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  p {
    font-family: 'Roboto';
    font-size: 22px;
    color: #6B6B6B;
  }
`;

export const Title = styled.h1`
  margin: 30px 0;
  font-family: 'Itim';
  font-size: 40px;
  color: black;
`;

export const Separator = styled.hr`
  margin: 40px 0;
  height: 1px;
  background: #C4C4C4;
  border: none;
`;