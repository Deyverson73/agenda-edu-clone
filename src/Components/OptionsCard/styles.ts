import styled from 'styled-components/native';
import { Text, Icon } from '../Global';
import { s, vs } from 'react-native-size-matters';
import { rp } from '../../Utils';

export const Container = styled.View.attrs({
  elevation: 6,
})`
  min-width: ${s(95)}px;
  padding: ${s(12)}px;
  margin-right: ${s(15)}px;
  border-radius: ${s(5)}px;
  background-color: ${({ theme }) => theme.background};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Footer = styled.View`
  margin-top: ${vs(15)}px;
`;

export const Counter = styled(Text)`
  color: #ffffff;
  font-size: ${rp(s(10), 18)}px;
  padding: ${s(1.5)}px ${s(6)}px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.primary};
`;

export const IconCard = styled((props) => Icon(props, props.lib)).attrs(
  ({ theme }) => ({
    color: theme.subTitle,
  }),
)`
  font-size: ${rp(s(16), 24)}px;
`;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.subTitle};
  font-size: ${rp(s(12), 20)}px;
`;
