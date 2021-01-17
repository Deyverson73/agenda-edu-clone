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

export interface IEventCard {
  id: string;
  image_url: string;
  category: string;
  title: string;
  info: string;
}

const EventCard = ({ item }: { item: IEventCard }) => {
  return (
    <Container>
      <EventImage
        resizeMethod="resize"
        resizeMode="cover"
        source={{ uri: item.image_url }}
      />
      <Gradient>
        <DetailsContainer>
          <Category>{item.category}</Category>
          <Title>{item.title}</Title>
          <Infos>
            <Calendar /> {item.info}
          </Infos>
        </DetailsContainer>
      </Gradient>
    </Container>
  );
};

export default EventCard;
