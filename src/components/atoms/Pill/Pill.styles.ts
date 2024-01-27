import {colors, layouts, spacing} from '/constants';
import px from '/utils/responsiveUI';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: px(4),
    paddingVertical: px(3),
    borderRadius: px(20),
  },
  text: {
    color: colors.white,
    fontSize: px(14),
  },
});

export default styles;
