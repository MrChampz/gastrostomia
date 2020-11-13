import React from 'react';
import { Container, Button, DownloadIcon } from './styles';

export default function DownloadButton(props) {
  const { showContainer, showButton, showIcon, className } = props;
  
  return (
    showContainer &&
      <Container className={ className }>
        <Button className={ 'ml-auto' + (showButton ? 'visible' : ' invisible') }>
          { showIcon && (
            <DownloadIcon size={ 20 } />
          )}
          Baixar Cartilha
        </Button>
      </Container>
  );
}

DownloadButton.defaultProps = {
  showContainer: true,
  showButton: true,
  showIcon: false,
  className: ''
}