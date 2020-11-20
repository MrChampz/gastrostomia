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
  justify-content: center;

  h1, h2, h3, h4 {
    margin-top: 15px;
    margin-bottom: 30px;
  }

  h5, h6 {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  p {
    font-family: 'Roboto';
    font-size: 22px;
    color: #262626;
  }

  blockquote {
    margin-top: 15px;
    margin-bottom: 40px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    border-left: 5px solid #262626;
    font-style: italic;
    line-height: 1.75rem;

    p {
      margin: 0;
      color: #6B6B6B;
    }
  }

  ul, ol {
    margin-top: 5px;
    margin-bottom: 25px;
  }

  li {
    margin: 5px 0;
    font-family: 'Roboto';
    font-size: 18px;
    color: #262626;
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