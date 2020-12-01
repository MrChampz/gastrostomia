import styled from 'styled-components';
import media from 'styled-media-query';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';

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

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NotFoundTitle = styled.p`
  text-align: center;
  font-family: 'Itim';
  font-size: 40px;
  font-weight: bold;
  color: black;
`;

export const NotFoundText = styled.p`
  text-align: center;
  font-family: 'Roboto';
  font-size: 18px;
  color: #6e6e6e;
`;

export const Emoji = styled.p`
  font-family: 'Itim';
  font-size: 60px;
  color: black;
`;

export const Button = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 13px;
  transition: all 0.1s ease-in;
`;