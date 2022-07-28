import {StyleSheet} from 'react-native';

const styles = (size: number) =>
  StyleSheet.create({
    horizontalRow: {
      width: '100%',
      height: 2,
      marginVertical: size,
      backgroundColor: '#E0E0E0',
    },
    verticalRow: {
      width: 2,
      height: '100%',
      marginHorizontal: size,
      backgroundColor: '#E0E0E0',
    },
  });

export default styles;
