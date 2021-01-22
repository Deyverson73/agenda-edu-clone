export interface Colors {
  primary: string;
  gray: string;
  title: string;
  subTitle: string;
  background: string;
  backgroundCard: string;
  backgroundBar: string;
}

const colors = {
  light: {
    primary: '#7D42D7',
    gray: '#BDBDBD',
    title: '#1A1A1A',
    subTitle: '#A1A1A1',
    background: '#FFFFFF',
    backgroundCard: '#F1EBFB',
    backgroundBar: '#ffffff',
  } as Colors,
  dark: {
    primary: '#7D42D7',
    gray: '#BDBDBD',
    title: '#f4f4f4',
    subTitle: '#e1e1e1',
    background: '#323232',
    backgroundCard: '#454545',
    backgroundBar: '#323232',
  } as Colors,
};

export default colors;
