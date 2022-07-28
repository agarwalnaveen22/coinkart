import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RootStackParamList} from '../../../routes';
import {Label} from 'atoms';

import styles from './style';

type Props = {
  title: string;
  showBack?: boolean;
  navigation: NativeStackNavigationProp<RootStackParamList>;
  quantity: number;
};

const Header = ({title, showBack = true, navigation, quantity = 0}: Props) => {
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const goToCart = useCallback(() => {
    navigation.navigate('Cart');
  }, [navigation]);
  return (
    <View style={styles.container}>
      {showBack ? (
        <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
          <Icon name="arrow-left" size={16} />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconContainer} />
      )}
      <Label text={title} />
      <TouchableOpacity onPress={goToCart}>
        <View style={styles.badge}>
          <Label style={styles.cartCounter} text={quantity} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="shopping-cart" size={16} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
