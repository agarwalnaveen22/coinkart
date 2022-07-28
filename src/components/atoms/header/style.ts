import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    right: 4,
    top: 2,
    backgroundColor: '#FF0000',
    padding: 2,
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7.5,
  },
  cartCounter: {
    fontSize: 8,
    color: '#FFFFFF',
  },
});

export default styles;
