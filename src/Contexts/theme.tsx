import React from 'react';
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

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme.light}>{children}</ThemeProvider>
);

export default Theme;
