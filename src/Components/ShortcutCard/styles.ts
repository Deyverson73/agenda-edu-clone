import styled from 'styled-components/native';
import { s } from 'react-native-size-matters';

export const Container = styled.View.attrs({
  elevation: 6,
})`
  width: ${s(55)}px;
  height: ${s(55)}px;
  border-radius: ${s(10)}px;
  margin-right: ${s(15)}px;
  overflow: hidden;
`;

export const ShortcutImage = styled.Image`
  width: 100%;
  height: 100%;
`;
