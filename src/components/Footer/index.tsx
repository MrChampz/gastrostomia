import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import {
  Styles,
  Container,
  Title,
  Text,
  Link,
  CreditsButton,
  MailButton,
  MailIcon,
  ModalContent,
  ExternLink
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
          <Title>Créditos</Title>
        </Modal.Header>
        <Modal.Body>
          <ModalContent>
            <Title>Conteúdo</Title>
            <Text>Mariluce Costa Pereira</Text>
            <Text className="content-margin">Sara Rodrigues Rosado</Text>
            <Title>Ilustrações</Title>
            <Text className="content-margin">Daniela Leme dos Santos</Text>
            <Title>Design</Title>
            <Text>Aline Sousa Lima</Text>
            <Text>Catharina Borba da Silva</Text>
            <ExternLink
              href="https://www.linkedin.com/in/felpsmac"
              target="_blank"
              className="content-margin"
            >
              Felipe Vieira Maciel de Souza
            </ExternLink>
            <Title>Programação</Title>
            <ExternLink
              href="https://www.linkedin.com/in/felpsmac"
              target="_blank"
              className="content-margin"
            >
              Felipe Vieira Maciel de Souza
            </ExternLink>
          </ModalContent>
        </Modal.Body>
      </Modal>
    </>
  );
}