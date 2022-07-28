import React from 'react';
import {View} from 'react-native';

import styles from './style';

type Props = {
  type?: 'Horizontal' | 'Vertical';
  size?: number;
};

const Separator = ({type = 'Horizontal', size = 8}: Props) => {
  return (
    <View
      style={
        type === 'Horizontal'
          ? styles(size).horizontalRow
          : styles(size).verticalRow
      }
    />
  );
};

export default Separator;
