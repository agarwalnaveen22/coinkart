/**
 * CoinKart
 * https://github.com/facebook/react-native
 *
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'mobx-react';
import Routes from './src/routes';
import {RootStore} from './src/store';

const store = new RootStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
