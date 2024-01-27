import {colors, layouts, spacing} from '/constants/styles';
import px from '/utils/responsiveUI';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  tabsContainer: {
    ...layouts.row,
    ...layouts.justifyBetween,
  },
  skeleton: {
    ...layouts.my.xs,
    ...layouts.mx.xxl,
  },
  isPressed: {
    borderBottomColor: colors.lightBlue,
    borderBottomWidth: px(5),
    borderRadius: px(5),
  },
  tab: {
    ...layouts.py.mlg,
    ...layouts.mx.mlg,
  },
  container: {
    backgroundColor: colors.white,
  },
});
