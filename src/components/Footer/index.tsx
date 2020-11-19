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
        <Text>© 2020</Text>
        <Link>Gastrostomia</Link>
      </Container>
      <Container>
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