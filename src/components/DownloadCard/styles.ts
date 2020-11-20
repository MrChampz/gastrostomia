import styled from 'styled-components';
import media from 'styled-media-query';

export const Styles = styled.div`
  margin: 35px 0;
  border-radius: 30px;
  background: #E8E8E8;

  display: flex;
  flex-direction: row;

  ${media.lessThan('medium')`
    margin: 60px 0;

    flex-direction: column;
    align-items: center;
  `}
`;

export const Image = styled.img`
  margin-left: 10px;
  width: 200px;
  height: 200px;
`;

export const Content = styled.div`
  padding: 20px;
  background: none;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .button {
    margin-left: auto;
    margin-top: -20px;

    ${media.lessThan('medium')`
      margin-top: 0;
      width: 100%;

      button {
        width: 100%;
      }
    `}
  }
`;

export const Title = styled.p`
  margin-top: 20px;

  font-family: 'Bebas Neue';
  font-size: 35px;
  color: black;

  ${media.lessThan('medium')`
    margin-top: 0;
  `}
`;

export const Description = styled.p`
  margin-top: 5px;
  font-family: 'Roboto';
  font-size: 18px;
  color: #6B6B6B;
`;