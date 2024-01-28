import {colors, layouts, spacing} from '/constants';
import px from '/utils/responsiveUI';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    ...layouts.row,
    ...layouts.justifyBetween,
    ...layouts.yCentered,
    ...layouts.py.xl,
    ...layouts.pt.xxl,
    ...layouts.px.md,
    borderStartEndRadius: px(2),
    borderBottomWidth: px(2),
    borderBottomColor: colors.yellow,
  },
  title: {
    color: colors.white,

    fontSize: px(32),
    fontWeight: 'bold',
  },
  circle: {
    borderWidth: 1,
    height: px(48),
    width: px(48),
    padding: 10,
    borderRadius: px(24),
    ...layouts.allCentered,
    borderColor: colors.white,
  },
  number: {fontSize: px(20), color: colors.white},
});
