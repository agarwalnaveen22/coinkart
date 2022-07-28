import React, {useCallback, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {inject, observer} from 'mobx-react';

import {RootStore} from 'store/index';
import {CoinCartDataType} from 'store/CoinsCartStore';
import {RootStackParamList} from '../../routes';
import {Button, Header, InputBox, Label} from 'atoms';
import styles from './style';

type Props = {
  store: RootStore;
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'Detail'>;
};

const DetailScene = ({store, navigation, route}: Props) => {
  const [quanity, setQuantity] = useState<string>('');
  const {coinsCartStore} = store;

  const addToCart = useCallback(() => {
    const cartObj: CoinCartDataType = {
      ...route.params.data,
      quantity: parseInt(quanity, 10),
    };
    coinsCartStore.setCart(cartObj);
    setQuantity('');
  }, [coinsCartStore, quanity, route.params.data]);

  const validateNumber = useCallback((number: string) => {
    const numberRegEx = /^[\d ]*$/;
    return numberRegEx.test(String(number).toLowerCase());
  }, []);

  const addQuantity = useCallback(
    (text: string) => {
      const isValid = validateNumber(text);
      if (isValid) {
        setQuantity(text);
      }
    },
    [validateNumber],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Details"
        navigation={navigation}
        quantity={coinsCartStore.cart.length}
      />
      <ScrollView style={styles.body}>
        {Object.keys(route.params.data).map(coinData => {
          return (
            <View key={coinData} style={styles.field}>
              <Label text={`${coinData} : `} style={styles.fieldTitle} />
              <Label text={route.params.data[coinData]} />
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.footer}>
        <Label text={`Buy ${route.params.data.name}`} />
        <View style={styles.inputContainer}>
          <InputBox
            textAlign="center"
            value={quanity}
            keyboardType="number-pad"
            onChangeText={addQuantity}
          />
        </View>
        <Button
          title="Add to cart"
          onPress={addToCart}
          disabled={quanity === ''}
        />
      </View>
    </SafeAreaView>
  );
};

export default inject('store')(observer(DetailScene));
