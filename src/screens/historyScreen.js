import React from 'react';
import { Container, Header, Content } from 'native-base';

import History from '../containers/history';

export default () => (
  <Container>
    <Header />
    <Content>
      <History />
    </Content>
  </Container>
);
