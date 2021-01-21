import React from 'react';

import { Container, ShortcutImage } from './styles';

const ShortcutCard = ({ image_url }: { image_url: string }) => {
  return (
    <Container>
      <ShortcutImage
        testID="ShortcutCard:Image"
        resizeMethod="resize"
        resizeMode="cover"
        source={{ uri: image_url }}
      />
    </Container>
  );
};

export default ShortcutCard;
