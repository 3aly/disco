import {colors, layouts, spacing} from '/constants/styles';
import px from '/utils/responsiveUI';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    ...layouts.row,
    ...layouts.justifyBetween,
    ...layouts.yCentered,
    ...layouts.py.md,
    ...layouts.px.xl,
  },

  date: {color: colors.grey},
  title: {
    fontSize: px(14),
    color: colors.black,
  },
  dataContainer: {
    ...layouts.row,
    ...layouts.justifyBetween,
  },
  image: {
    width: px(45),
    height: px(45),
    borderRadius: px(25),
    ...layouts.me.xl,
  },
  percentage: {fontSize: px(16), color: colors.black},
});
