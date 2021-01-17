import styled from 'styled-components/native';
import { Icon } from '../Components/Global';
import { s, vs } from 'react-native-size-matters';
import { rp } from '../Utils';

export const IconCard = styled((props) => Icon(props, props.lib)).attrs(
  ({ theme, focused }) => ({
    color: focused ? theme.primary : theme.subTitle,
  }),
)<{ focused: boolean }>`
  font-size: ${rp(s(24), 32)}px;
  padding: ${vs(6)}px ${s(12)}px;
  border-radius: ${s(10)}px;
  background-color: ${({ theme, focused }) =>
    focused ? theme.backgroundCard : 'transparent'};
`;
