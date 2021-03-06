import React from 'react';

import {
  Container,
  EventImage,
  Gradient,
  DetailsContainer,
  Category,
  Title,
  Calendar,
  Infos,
} from './styles';

export interface IEvent {
  id: string;
  image_url: string;
  category: string;
  title: string;
  info: string;
}

const EventCard = ({ item }: { item: IEvent }) => {
  return (
    <Container>
      <EventImage
        testID="EventCard:Image"
        resizeMethod="resize"
        resizeMode="cover"
        source={{ uri: item.image_url }}
      />
      <Gradient>
        <DetailsContainer>
          <Category testID="EventCard:Category">{item.category}</Category>
          <Title testID="EventCard:Title">{item.title}</Title>
          <Infos testID="EventCard:Infos">
            <Calendar /> {item.info}
          </Infos>
        </DetailsContainer>
      </Gradient>
    </Container>
  );
};

const verifyUpdate = (prevProps, nextProps) => {
  if (prevProps.item === nextProps.item) {
    return true;
  } else {
    return false;
  }
};

export default React.memo(EventCard, verifyUpdate);
