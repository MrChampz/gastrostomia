import styled from 'styled-components';
import media from 'styled-media-query';

export const Styles = styled.div`
  margin: 35px 0;

  display: flex;
  flex-direction: row;

  ${ media.lessThan('medium')`
    margin: 60px 0;

    flex-direction: column;
    align-items: center;
  `}
`;

export const ImageContainer = styled.div`
  margin-right: 40px;
  width: 200px;
  height: 200px;
  border-radius: 30px;
  background: #E8E8E8;
  
  display: flex;
  align-items: center;
  justify-content: center;

  ${ media.lessThan('medium')`
    margin-right: 0;
    margin-bottom: 30px;
  `}
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Topic = styled.div`
  padding: 4px 12px;

  text-transform: uppercase;
  font-family: 'Itim';
  font-size: 16px;
  color: white;

  background: #F42D4B;
  border-radius: 13px;
`;

export const Title = styled.a`
  margin-top: 10px;

  font-family: 'Itim';
  font-size: 35px;
  color: black;

  &:hover {
    color: #454545;
    text-decoration: none;
  }
`;

export const Description = styled.p`
  margin-top: 10px;

  font-family: 'Roboto';
  font-size: 18px;
  color: #6B6B6B;
`