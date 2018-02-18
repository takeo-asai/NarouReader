import React from 'react';
import { Container, Content, Header } from 'native-base';

import Favorites from '../containers/favorites';

export default () => (
  <Container>
    <Header />
    <Content>
      <Favorites />
    </Content>
  </Container>
);
