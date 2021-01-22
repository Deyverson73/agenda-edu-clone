import 'react-native-gesture-handler/jestSetup';
import 'jest-styled-components/native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import colors from '../src/Constants/Colors';
import renderer from 'react-test-renderer';
import fetch from 'node-fetch';
import App from '../App';
import { eventTest } from './EventCard.test';
import { optionTest } from './OptionCard.test';
import { shortcutTest } from './Shortcut.test';

// Fix useNativeDriver warning
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.setTimeout(30000);
jest.useFakeTimers();

const tree = renderer.create(
  <ThemeProvider theme={colors.light}>
    <App />
  </ThemeProvider>,
);

test('App Snapshot', () => {
  expect(tree.toJSON()).toMatchSnapshot();
});

test('App Avatar Test', async () => {
  const image = tree.root.findByProps({ testID: 'Home:Avatar' }).props;
  await fetch(image.source.uri, { method: 'GET' }).then(async (response) => {
    const result = await response.blob();
    expect(result.type).toContain('image');
  });
});

test('App Carrousel Test', async () => {
  const carrousel = tree.root.findByProps({ testID: 'Home:Carrousel' }).props;
  expect(carrousel.data.length).toBeGreaterThan(0);
  for (const event of carrousel.data) {
    await eventTest(event);
  }
});

test('App Option Test', async () => {
  const options = tree.root.findByProps({ testID: 'Home:OptionList' }).props;
  expect(options.data.length).toBeGreaterThan(0);
  for (const item of options.data) {
    await optionTest(item);
  }
});

test('App Shortcut Test', async () => {
  const shortcut = tree.root.findByProps({ testID: 'Home:ShortcutList' }).props;
  expect(shortcut.data.length).toBeGreaterThan(0);
  for (const item of shortcut.data) {
    await shortcutTest(item);
  }
});
