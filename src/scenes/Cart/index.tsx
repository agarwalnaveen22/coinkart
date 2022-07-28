import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, SafeAreaView, View} from 'react-native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {inject, observer} from 'mobx-react';

import {RootStore} from 'store/index';
import {RootStackParamList} from '../../routes';
import {Header, Label, Separator} from 'atoms';
import styles from './style';
import {CoinCartDataType} from '../../store/CoinsCartStore';

type Props = {
  store: RootStore;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const CartScene = ({store, navigation}: Props) => {
  const {coinsCartStore} = store;
  const renderField = useCallback(
    (fieldName: string, fieldValue: string | number) => {
      return (
        <View style={styles.field}>
          <Label text={`${fieldName} : `} style={styles.fieldTitle} />
          <Label text={fieldValue} />
        </View>
      );
    },
    [],
  );
  const renderList: ListRenderItem<CoinCartDataType> = useCallback(
    ({item}) => {
      return (
        <View style={styles.list}>
          {renderField('Name', item.name)}
          {renderField('Symbol', item.symbol)}
          {renderField('Price USD', item.price_usd)}
          {renderField('Quantity', item.quantity)}
          {renderField(
            'Total Amount',
            (item.quantity * parseFloat(item.price_usd)).toFixed(2),
          )}
        </View>
      );
    },
    [renderField],
  );
  const itemSeparator = useCallback(() => {
    return <Separator />;
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Cart"
        showBack={true}
        navigation={navigation}
        quantity={coinsCartStore.cart.length}
      />
      <View style={styles.body}>
        {coinsCartStore.cart.length > 0 ? (
          <FlatList
            data={coinsCartStore.cart}
            renderItem={renderList}
            ItemSeparatorComponent={itemSeparator}
            keyExtractor={({id}) => id}
          />
        ) : (
          <View style={styles.noCartText}>
            <Label text={'No items found in cart'} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default inject('store')(observer(CartScene));
