import styled from 'styled-components/native';
import { Text } from '../../Components/Global';
import { s, vs } from 'react-native-size-matters';
import { rp } from '../../Utils';
import { Pagination } from 'react-native-snap-carousel';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: vs(70),
  },
})`
  background-color: ${({ theme }) => theme.primary};
`;

export const StatusBar = styled.StatusBar.attrs(({ theme }) => ({
  backgroundColor: theme.primary,
}))``;

export const Main = styled.View`
  align-items: center;
  border-top-left-radius: ${s(20)}px;
  border-top-right-radius: ${s(20)}px;
  background-color: ${({ theme }) => theme.background};
`;

export const AvatarContainer = styled.View.attrs({
  elevation: 15,
})`
  margin-top: ${s(-35)}px;
  border-radius: 50px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background};
`;

export const UserAvatar = styled.Image`
  width: ${s(70)}px;
  max-width: 100px;
  height: ${s(70)}px;
  max-height: 100px;
`;

export const UserName = styled(Text)`
  color: ${({ theme }) => theme.title};
  font-weight: bold;
  font-size: ${rp(s(16), 24)}px;
  margin-top: ${vs(12)}px;
`;

export const Suggestion = styled(Text)`
  color: ${({ theme }) => theme.subTitle};
  font-size: ${rp(s(11.5), 19.5)}px;
`;

export const IndicatorsContainer = styled.View`
  margin-top: ${vs(-38)}px;
`;

export const Indicators = styled(Pagination).attrs(({ theme }) => ({
  dotStyle: {
    width: s(15),
    height: vs(4),
    borderRadius: vs(2),
    marginHorizontal: s(-3),
    backgroundColor: theme.primary,
  },
  inactiveDotOpacity: 0.3,
  inactiveDotScale: 1,
}))``;

export const Options = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingVertical: vs(8),
    paddingHorizontal: '8%',
  },
})`
  background-color: ${({ theme }) => theme.background};
`;

export const ShortcutsContainer = styled.View`
  padding: ${vs(18)}px 8%;
  background-color: ${({ theme }) => theme.background};
`;

export const ShortcutContent = styled.View`
  border-radius: ${s(10)}px;
  background-color: ${({ theme }) => theme.backgroundCard};
`;

export const ShortcutTitle = styled(Text)`
  color: ${({ theme }) => theme.title};
  font-weight: bold;
  font-size: ${rp(s(16), 24)}px;
  margin-top: ${vs(12)}px;
  margin-left: ${s(15)}px;
`;

export const Shortcuts = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingVertical: vs(15),
    paddingHorizontal: s(15),
  },
})``;
