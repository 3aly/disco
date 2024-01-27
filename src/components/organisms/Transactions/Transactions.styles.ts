import {colors, layouts, spacing} from '/constants/styles';
import px from '/utils/responsiveUI';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  tabsContainer: {
    ...layouts.row,
    ...layouts.justifyBetween,
  },
  skeleton: {
    ...layouts.my.md,
    ...layouts.px.xl,
  },
  isPressed: {
    borderBottomColor: colors.blue,
    borderBottomWidth: px(5),
    borderRadius: px(5),
  },
  tab: {
    ...layouts.py.mlg,
    ...layouts.mx.mlg,
    textAlign: 'center',
  },
  container: {
    backgroundColor: colors.white,
  },
});
