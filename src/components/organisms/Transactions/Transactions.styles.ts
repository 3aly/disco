import {colors, layouts, spacing} from '/constants/styles';
import px from '/utils/responsiveUI';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  tabsContainer: {
    ...layouts.row,
    ...layouts.justifyBetween,
    backgroundColor: 'red',
  },
  fullWidth: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  isPressed: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 5,
    borderRadius: px(5),
  },
  tab: {
    ...layouts.py.mlg,
    ...layouts.mx.mlg,
    textAlign: 'center',
  },
  container: {
    backgroundColor: 'white',
  },
});
