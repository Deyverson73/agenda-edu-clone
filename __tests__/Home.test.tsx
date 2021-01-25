import 'react-native-gesture-handler/jestSetup';
import 'jest-styled-components/native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import colors from '../src/Constants/Colors';
import { create, act } from 'react-test-renderer';
import App from '../App';
import { store } from '../src/Redux/Store';

// Fix useNativeDriver warning
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.setTimeout(30000);
jest.useFakeTimers();

create(
  <ThemeProvider theme={colors.light}>
    <App />
  </ThemeProvider>,
);

describe('Home HandleTheme Test', () => {
  it('Handle Theme', () => {
    act(() => {
      expect(store.getState().MainReducer.theme).toBe('light');
      store.dispatch({
        type: 'SAGA.THEME.CHANGE',
        theme: 'dark',
      });
      expect(store.getState().MainReducer.theme).toBe('dark');
    });
  });
});
