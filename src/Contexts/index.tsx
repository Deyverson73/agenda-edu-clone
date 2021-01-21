import React, { ReactNode } from 'react';
import ThemeProvider from './theme';

interface GlobalProps {
  children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default GlobalProvider;
