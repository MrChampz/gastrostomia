import styled from 'styled-components';
import media from 'styled-media-query';
import { Button } from 'react-bootstrap';

export const Styles = styled.div`
  margin: 35px 0;
  border-radius: 30px;
  background: #E8E8E8;

  display: flex;
  flex-direction: row;

  ${ media.lessThan('medium')`
    margin: 60px 0;

    flex-direction: column;
    align-items: center;
  `}
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;

export const Content = styled.div`
  padding: 20px;
  background: none;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.p`
  margin-top: 20px;

  font-family: 'Itim';
  font-size: 35px;
  color: black;

  ${ media.lessThan('medium')`
    margin-top: 0;
  `}
`;

export const Description = styled.p`
  margin-top: 5px;
  font-family: 'Roboto';
  font-size: 18px;
  color: #6B6B6B;
`

export const DownloadButton = styled(Button)`
  margin-top: -20px;
  height: 38px;
  border-radius: 13px;

  ${ media.lessThan('medium')`
    margin-top: 0;
    width: 100%;
  `}
`;