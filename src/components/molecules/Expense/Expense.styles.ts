import {colors, layouts, spacing} from '/constants/styles';
import px from '/utils/responsiveUI';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    ...layouts.row,
    ...layouts.justifyBetween,
    ...layouts.yCentered,
    ...layouts.py.sm,
    ...layouts.px.xxl,
  },
  data: {
    ...layouts.row,
    ...layouts.justifyBetween,
    ...layouts.yCentered,
  },
  title: {
    fontSize: px(20),
    color: 'black',
    ...layouts.ms.md,
  },
  icon: {},
  percentage: {fontSize: px(20), color: colors.green},
});
