import React from 'react';

import {
  Styles,
  Container,
  Text,
  Link,
  ExternLink,
  MailButton,
  MailIcon
} from './styles';

export default function Footer() {
  return (
    <Styles>
      <Container>
        <Text>Criado por</Text>
        <ExternLink>UpCO</ExternLink>
      </Container>
      <Container>
        <Text>© { new Date().getFullYear() }</Text>
        <Link to="/">Gastrostomia</Link>
      </Container>
      <Container className="buttons-container-margin">
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
  );
}