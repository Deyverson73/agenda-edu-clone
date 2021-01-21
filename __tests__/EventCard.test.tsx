import 'react-native-gesture-handler/jestSetup';
import 'jest-styled-components/native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import colors from '../src/Constants/Colors';
import renderer from 'react-test-renderer';
import fetch from 'node-fetch';
import EventCard, { IEventCard } from '../src/Components/EventCard';

// Fix useNativeDriver warning
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.useFakeTimers();
jest.setTimeout(30000);

const items: IEventCard[] = [
  {
    id: '1',
    image_url:
      'https://brasil.estadao.com.br/blogs/vencer-limites/wp-content/uploads/sites/189/2018/12/DanteGEN_Explorum01_20dezembro2018_blogVencerLimites.jpeg',
    category: 'Eventos',
    title: 'Mostra Científica',
    info: '26 de Janeiro às 07:30',
  },
  {
    id: '2',
    image_url:
      'https://brstatic.guiainfantil.com/uploads/Esportes_e_artes/crianas-seguras-na-piscina_A.jpg',
    category: 'Eventos',
    title: 'XVII Olimpíadas escolares',
    info: '25 de Janeiro às 14:00',
  },
  {
    id: '3',
    image_url:
      'https://www.vozdobico.com.br/wp-content/uploads/2017/09/Palestra-para-crian%C3%A7as-9.jpeg',
    category: 'Eventos',
    title: 'Palestra',
    info: '27 de Janeiro às 15:00',
  },
];

for (const item of items) {
  const tree = renderer.create(
    <ThemeProvider theme={colors.light}>
      <EventCard item={item} />
    </ThemeProvider>,
  );

  // Verifica se o arquivo retornado é um arquivo de imagem
  test('Test Image', async () => {
    await fetch(item.image_url, { method: 'GET' }).then(async (response) => {
      const result = await response.blob();
      expect(result.type).toContain('image');
    });

    const image = tree.root.findByProps({ testID: 'EventCard:Image' }).props;
    expect(image).toBeDefined();
  });

  // Verifica se os atributos existem e se a saída é igual a entrada
  test('Test Category', () => {
    const category = tree.root.findByProps({ testID: 'EventCard:Category' })
      .props;
    expect(category.children.trim()).not.toBe('');
    expect(category.children).toEqual(item.category);
  });

  test('Test Title', () => {
    const title = tree.root.findByProps({ testID: 'EventCard:Title' }).props;
    expect(title.children.trim()).not.toBe('');
    expect(title.children).toEqual(item.title);
  });

  test('Test Infos', () => {
    const infos = tree.root.findByProps({ testID: 'EventCard:Infos' }).props;
    expect(infos.children[2].trim()).not.toBe('');
    expect(infos.children[2]).toEqual(item.info);
  });
}
//
