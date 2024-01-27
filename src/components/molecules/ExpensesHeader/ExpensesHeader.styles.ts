import {colors, layouts, spacing} from '/constants/styles';
import px from '/utils/responsiveUI';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    ...layouts.row,
    ...layouts.justifyBetween,
    ...layouts.yCentered,
    ...layouts.my.sm,
    ...layouts.px.xxl,
  },

  title: {
    fontSize: px(12),
    fontWeight: 'bold',
    color: 'black',
  },
  icon: {
    borderWidth: 1,
    height: px(48),
    width: px(48),
    padding: 10,
    borderRadius: px(24),
    ...layouts.allCentered,
    borderColor: 'black',
  },
  totalExpenses: {
    color: 'black',
    fontSize: px(32),
  },
});
