import {colors, layouts, spacing} from '/constants/styles';
import px from '/utils/responsiveUI';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    ...layouts.row,
    ...layouts.justifyBetween,
    ...layouts.yCentered,
    ...layouts.py.sm,
    ...layouts.px.xxl,
  },
  data: {
    backgroundColor: 'white',
    ...layouts.row,
    ...layouts.justifyBetween,
    ...layouts.yCentered,
  },
  title: {
    fontSize: px(20),
  },
  icon: {},
  percentage: {fontSize: px(20)},
});
