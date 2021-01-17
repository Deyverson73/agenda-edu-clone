import styled from 'styled-components/native';
import { Text, Icon } from '../Global';
import { s, vs } from 'react-native-size-matters';
import { rp } from '../../Utils';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View.attrs({
  elevation: 15,
})`
  max-height: ${vs(200)}px;
  border-radius: ${s(10)}px;
  margin: ${vs(20)}px 0;
  justify-content: flex-end;
  overflow: hidden;
`;

export const EventImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['#00000000', '#333333aa'],
})``;

export const DetailsContainer = styled.View`
  height: 100%;
  align-items: flex-start;
  justify-content: flex-end;
  padding: ${s(12)}px;
`;

export const Category = styled(Text)`
  color: #ffffff;
  font-size: ${rp(s(11.5), 19.5)}px;
  margin-top: ${vs(4)}px;
  padding: ${s(7)}px;
  font-weight: bold;
  text-align: center;
  border-radius: ${s(6)}px;
  background-color: #ffffff55;
`;

export const Title = styled(Text)`
  color: #ffffff;
  font-weight: bold;
  font-size: ${rp(s(16), 24)}px;
  margin-top: ${vs(10)}px;
`;

export const Infos = styled(Text)`
  color: #f1f1f1;
  font-size: ${rp(s(13), 21)}px;
  margin-top: ${vs(4)}px;
`;

export const Calendar = styled((props) => Icon(props, 'Feather')).attrs({
  name: 'calendar',
  color: '#f1f1f1',
})`
  font-size: ${rp(s(13), 21)}px;
`;
