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

  date: {color: colors.grey},
  title: {
    fontSize: px(14),
    color: 'black',
  },
  dataContainer: {
    ...layouts.row,
    ...layouts.justifyBetween,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: px(25),
    ...layouts.me.xl,
  },
  percentage: {fontSize: px(16), color: 'black'},
});
