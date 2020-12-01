import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import {
  Styles,
  Container,
  Text,
  Link,
  CreditsButton,
  MailButton,
  MailIcon
} from './styles';

export default function Footer(props) {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <>
      <Styles { ...props }>
        <Container className="justify-content-start">
          <CreditsButton onClick={ handleModalShow }>Créditos</CreditsButton>
        </Container>
        <Container className="justify-content-center">
          <Text>© { new Date().getFullYear() }</Text>
          <Link to="/">Gastrostomia</Link>
        </Container>
        <Container className="justify-content-end buttons-container-margin">
          <MailButton
            className="btn btn-primary"
            href="mailto:sara.rrosado@hotmail.com"
          >
            <MailIcon size={ 24 } />
          </MailButton>
          <MailButton
            className="btn btn-primary buttons-margin"  
            href="mailto:borboletasdafabi@gmail.com"
          >
            <MailIcon size={ 24 } />
          </MailButton>
          <MailButton
            className="btn btn-primary buttons-margin"  
            href="mailto:marilucecostap@gmail.com"
          >
            <MailIcon size={ 24 } />
          </MailButton>
        </Container>
      </Styles>
      
      <Modal
        show={ showModal }
        onHide={ handleModalClose }
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>Créditos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Conteúdo</h4>
          Mariluce Costa Pereira
          Sara Rodrigues Rosado
          <h4>Ilustrações</h4>
          Daniela Leme dos Santos
          <h4>Design</h4>
          Aline Sousa Lima
          Catharina Borba da Silva
          Felipe Vieira Maciel de Souza
          <h4>Programação</h4>
          Felipe Vieira Maciel de Souza
        </Modal.Body>
      </Modal>
    </>
  );
}