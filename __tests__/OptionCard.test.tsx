import 'react-native-gesture-handler/jestSetup';
import 'jest-styled-components/native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import colors from '../src/Constants/Colors';
import renderer from 'react-test-renderer';
import OptionsCard, { IOptions } from '../src/Components/OptionsCard';

// Fix useNativeDriver warning
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.useFakeTimers();
console.error = jest.fn();

const items: IOptions[] = [
  {
    icon: { lib: 'MaterialCommunityIcons', name: 'pencil-outline' },
    counter: 1,
    title: 'Atividades',
  },
  {
    icon: { lib: 'Ionicons', name: 'megaphone-outline' },
    counter: 0,
    title: 'Comunicados',
  },
  {
    icon: { lib: 'Feather', name: 'calendar' },
    counter: 3,
    title: 'Eventos',
  },
];

export const optionTest = (item: IOptions) => {
  const tree = renderer.create(
    <ThemeProvider theme={colors.light}>
      <OptionsCard item={item} />
    </ThemeProvider>,
  );

  // Verifica se o ícone foi montado corretamente
  const icon = tree.root.findByProps({ testID: 'OptionsCard:IconCard' }).props;
  expect(icon).toBeDefined();
  expect(console.error).not.toHaveBeenCalled();

  // Verifica se existe título e se a saída é igual a entrada
  const title = tree.root.findByProps({ testID: 'OptionsCard:Title' }).props;
  expect(title.children.trim()).not.toBe('');
  expect(title.children).toEqual(item.title);

  // Havendo um valor maior que 0 no contador, verifica se é diferente de 0 e se a saída é igual a entrada
  if (item.counter) {
    const counter = tree.root.findByProps({ testID: 'OptionsCard:Counter' })
      .props;
    expect(counter.children).not.toEqual(0);
    expect(counter.children).toEqual(item.counter);
  }
};

for (const item of items) {
  test(`OptionsCard Test ${item.title}`, () => optionTest(item));
}
