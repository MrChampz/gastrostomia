import styled from 'styled-components';
import { CloudDownloadOutline as Download } from '@styled-icons/evaicons-outline';

export const Container = styled.div`
  background: none;
  
  .visible {
    opacity: 100%;
  }

  .invisible {
    opacity: 0%;
  }
`;

export const Button = styled.a`
  margin-left: auto;
  height: 38px;
  border-radius: 13px;
  transition: all 0.1s ease-in;
`;

export const DownloadIcon = styled(Download)`
  margin-right: 10px;
  color: white;
`;