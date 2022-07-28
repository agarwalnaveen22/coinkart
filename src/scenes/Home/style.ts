import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    padding: 8,
  },
  list: {
    padding: 16,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fieldTitle: {
    fontWeight: 'bold',
  },
  searchContainer: {
    height: 60,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    paddingEnd: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchBox: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
