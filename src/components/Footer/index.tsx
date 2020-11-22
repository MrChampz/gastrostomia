import React from 'react';

import {
  Styles,
  Container,
  Text,
  Link,
  MailButton,
  MailIcon
} from './styles';

export default function Footer() {
  return (
    <Styles>
      <Container>
        <Text>Criado por</Text>
        <Link>UpCO</Link>
      </Container>
      <Container>
        <Text>© { new Date().getFullYear() }</Text>
        <Link>Gastrostomia</Link>
      </Container>
      <Container className="buttons-margin">
        <MailButton>
          <MailIcon size={ 24 } />
        </MailButton>
        <MailButton>
          <MailIcon size={ 24 } />
        </MailButton>
        <MailButton>
          <MailIcon size={ 24 } />
        </MailButton>
      </Container>
    </Styles>
  );
}