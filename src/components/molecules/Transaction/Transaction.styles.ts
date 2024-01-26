import {colors, layouts, spacing} from '/constants/styles';
import px from '/utils/responsiveUI';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    ...layouts.row,
    ...layouts.justifyBetween,
    ...layouts.yCentered,
    ...layouts.py.md,
    ...layouts.px.xl,
  },
  date: {},
  title: {
    fontSize: px(14),
  },
  icon: {},
  percentage: {fontSize: px(16)},
});
