import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Detail, Cart} from './scenes';
import {CoinDataType} from 'store/CoinsListStore';

export type RootStackParamList = {
  Home: undefined;
  Detail: {
    data: CoinDataType;
  };
  Cart: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default Routes;
