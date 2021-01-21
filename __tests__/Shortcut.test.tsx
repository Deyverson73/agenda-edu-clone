import 'react-native-gesture-handler/jestSetup';
import 'jest-styled-components/native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import colors from '../src/Constants/Colors';
import renderer from 'react-test-renderer';
import fetch from 'node-fetch';
import ShortcutCard from '../src/Components/ShortcutCard';

// Fix useNativeDriver warning
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.setTimeout(30000);
jest.useFakeTimers();

const url_images = [
  'https://play-lh.googleusercontent.com/gJvLrKo1KmlZodvBBwcUBeHVra5kuSnCa9T9-o5AmzknJhatzRRNMTHLoHJQmk03xHQ=s180-rw',
  'https://play-lh.googleusercontent.com/d85SyM3_rjiym7bad_vP2_AA3J0WV4PnnzF0Pm_zU7S5CseZ7XVkI83ibRlEY-NCsvP4=s180-rw',
  'https://play-lh.googleusercontent.com/9f2xzforyaQz1yoRSiS5Mj5r2z7gh2FCzWAl3Uo-2wUrS2bsDWHSEyq5zDylp1gndw=s180-rw',
];

// Verifica se o arquivo retornado é um arquivo de imagem
export const shortcutTest = async (url: string) => {
  const tree = renderer.create(
    <ThemeProvider theme={colors.light}>
      <ShortcutCard image_url={url} />
    </ThemeProvider>,
  );

  // Verifica se o arquivo retornado é um arquivo de imagem
  await fetch(url, { method: 'GET' }).then(async (response) => {
    const result = await response.blob();
    expect(result.type).toContain('image');
  });

  const image = tree.root.findByProps({ testID: 'ShortcutCard:Image' }).props;
  expect(image).toBeDefined();
};

for (const url of url_images) {
  test('Shortcut Test Image', async () => shortcutTest(url));
}
