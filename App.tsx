import 'react-native-gesture-handler';
import React from 'react';
import Route from './src/Routes';
import Theme from './src/Contexts/theme';
const App = () => {
  return (
    <Theme>
      <Route />
    </Theme>
  );
};

export default App;
