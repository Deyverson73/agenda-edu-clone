import 'react-native-gesture-handler/jestSetup';
import 'jest-styled-components/native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import colors from '../src/Constants/Colors';
import renderer from 'react-test-renderer';
import fetch from 'node-fetch';
import Home from '../src/Screens/Home';

// Fix useNativeDriver warning
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.setTimeout(30000);
jest.useFakeTimers();

const item = {
  image_url:
    'https://blush.design/api/download?shareUri=q_Ap_5y_i&s=0%7Ed4a181&w=800&h=800&fm=png',
};

const tree = renderer.create(
  <ThemeProvider theme={colors.light}>
    <Home />
  </ThemeProvider>,
);

// Verifica se o avatar recebe url
test('Home Avatar', async () => {
  await fetch(item.image_url, { method: 'GET' }).then(async (response) => {
    const result = await response.blob();
    expect(result.type).toContain('image');
  });

  const image = tree.root.findByProps({ testID: 'Home:Avatar' }).props;
  expect(image).toBeDefined();
});

test('Home Carrousel', () => {
  const carrousel = tree.root.findByProps({ testID: 'Home:Carrousel' }).props;
  expect(carrousel.data.length).toBeGreaterThan(0);
});
