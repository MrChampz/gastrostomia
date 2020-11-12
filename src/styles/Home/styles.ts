import styled from 'styled-components';
import media from 'styled-media-query';

export const Styles = styled.div`
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