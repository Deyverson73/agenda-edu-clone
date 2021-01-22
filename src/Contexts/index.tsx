import React, { ReactNode } from 'react';
import ThemeProvider from './theme';
import { store } from '../Redux/Store';
import { Provider } from 'react-redux';

interface GlobalProps {
  children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

export default GlobalProvider;
