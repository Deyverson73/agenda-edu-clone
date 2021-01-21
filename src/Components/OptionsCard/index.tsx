import React from 'react';
import { Alert } from 'react-native';

import {
  Container,
  Content,
  Header,
  Footer,
  IconCard,
  Counter,
  Title,
} from './styles';

export interface IOptions {
  icon: {
    lib: string;
    name: string;
  };
  counter: number;
  title: string;
}

const OptionsCard = ({ item }: { item: IOptions }) => {
  const alertTitle = () => Alert.alert(item.title);

  return (
    <Container onPress={alertTitle}>
      <Content>
        <Header>
          <IconCard
            testID="OptionsCard:IconCard"
            lib={item.icon.lib}
            name={item.icon.name}
          />
          {!!item.counter && (
            <Counter testID="OptionsCard:Counter">{item.counter}</Counter>
          )}
        </Header>
        <Footer>
          <Title testID="OptionsCard:Title">{item.title}</Title>
        </Footer>
      </Content>
    </Container>
  );
};

export default OptionsCard;
