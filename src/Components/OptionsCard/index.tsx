import React from 'react';

import { Container, Header, Footer, IconCard, Counter, Title } from './styles';

interface IOptions {
  icon: {
    lib: string;
    name: string;
  };
  counter: number;
  title: string;
}

const OptionsCard = ({ item }: { item: IOptions }) => {
  return (
    <Container>
      <Header>
        <IconCard lib={item.icon.lib} name={item.icon.name} />
        <Counter>{item.counter}</Counter>
      </Header>
      <Footer>
        <Title>{item.title}</Title>
      </Footer>
    </Container>
  );
};

export default OptionsCard;
