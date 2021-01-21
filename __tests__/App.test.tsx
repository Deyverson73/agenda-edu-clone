import 'react-native-gesture-handler/jestSetup';
import 'jest-styled-components/native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import colors from '../src/Constants/Colors';
import renderer from 'react-test-renderer';
import App from '../App';

// Fix useNativeDriver warning
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

test('Test App', () => {
  jest.useFakeTimers();
  const tree = renderer
    .create(
      <ThemeProvider theme={colors.light}>
        <App />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toBeDefined();
});
