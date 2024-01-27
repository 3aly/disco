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
  date: {color: 'black'},
  title: {
    fontSize: px(14),
    color: 'black',
  },
  icon: {},
  percentage: {fontSize: px(16), color: 'black'},
});
