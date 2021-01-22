import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import colors, { Colors } from '../Constants/Colors';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {}
}

const theme = {
  ...colors,
};

type ThemeProps = { children?: React.ReactNode };

const Theme = ({ children }: ThemeProps) => {
  const currentTheme = useSelector(({ MainReducer }) => MainReducer.theme);
  return <ThemeProvider theme={theme[currentTheme]}>{children}</ThemeProvider>;
};

export default Theme;
