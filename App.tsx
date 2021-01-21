import 'react-native-gesture-handler';
import React from 'react';
import Route from './src/Routes';
import GlobalContext from './src/Contexts/';
const App = () => {
  return (
    <GlobalContext>
      <Route />
    </GlobalContext>
  );
};

export default App;
