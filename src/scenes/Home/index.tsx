import React, {useCallback, useState} from 'react';
import {FlatList, ListRenderItem, TouchableOpacity, View} from 'react-native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {inject, observer} from 'mobx-react';

import {RootStackParamList} from '../../routes';
import {Header, InputBox, Label, Separator} from 'atoms';
import styles from './style';
import {RootStore} from 'store/index';
import {CoinDataType} from 'store/CoinsListStore';

type Props = {
  store: RootStore;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const HomeScene = ({store, navigation}: Props) => {
  const {coinsListStore, coinsCartStore} = store;
  const [isRefreshing, setRefreshing] = useState<boolean>(false);
  const filterCoins = useCallback(
    (text: string) => {
      coinsListStore.filterCoins(text);
    },
    [coinsListStore],
  );
  const renderField = useCallback((fieldName: string, fieldValue: string) => {
    return (
      <View style={styles.field}>
        <Label text={`${fieldName} : `} style={styles.fieldTitle} />
        <Label text={fieldValue} />
      </View>
    );
  }, []);
  const renderList: ListRenderItem<CoinDataType> = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity
          style={styles.list}
          onPress={() => navigation.navigate('Detail', {data: item})}>
          {renderField('Name', item.name)}
          {renderField('Symbol', item.symbol)}
          {renderField('Price USD', item.price_usd)}
        </TouchableOpacity>
      );
    },
    [navigation, renderField],
  );
  const itemSeparator = useCallback(() => {
    return <Separator />;
  }, []);
  const refreshControl = useCallback(() => {
    setRefreshing(false);
    coinsListStore.fetchCoins();
  }, [coinsListStore]);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      coinsListStore.fetchCoins();
    });

    return unsubscribe;
  }, [coinsListStore, navigation]);
  return (
    <View style={styles.container}>
      <Header
        title="List"
        showBack={false}
        navigation={navigation}
        quantity={coinsCartStore.cart.length}
      />
      <View style={styles.searchContainer}>
        <Label text="Search:" style={styles.searchText} />
        <InputBox
          onChangeText={filterCoins}
          placeholder="Type here to search"
        />
      </View>
      <View style={styles.body}>
        <FlatList
          data={
            coinsListStore.filteredCoins.length > 0
              ? coinsListStore.filteredCoins
              : coinsListStore.coins
          }
          renderItem={renderList}
          ItemSeparatorComponent={itemSeparator}
          refreshing={isRefreshing}
          onRefresh={refreshControl}
          keyExtractor={({id}) => id}
        />
      </View>
    </View>
  );
};

export default inject('store')(observer(HomeScene));
