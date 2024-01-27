import {colors, layouts, spacing} from '/constants/styles';
import px from '/utils/responsiveUI';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  tabsContainer: {
    ...layouts.row,
    ...layouts.justifyBetween,
    backgroundColor: 'red',
  },
  // fullWidth: {
  //   backgroundColor: "white",
  //   justifyContent: "space-between",
  // },
  listContainer: {
    width: '100%',
    // backgroundColor: "white",
    justifyContent: 'space-between',
    ...layouts.px.xl,
  },
  isPressed: {
    borderBottomColor: colors.blue,
    borderBottomWidth: px(3),
  },
  name: {
    textAlign: 'center',
    fontSize: px(18),
    color: 'black',
  },
  tab: {
    // backgroundColor: "green",
    ...layouts.py.mlg,
    ...layouts.mx.mlg,
    borderBottomColor: colors.blue,
    // borderBottomWidth: px(3),
    // textAlign: "center",
  },
  container: {
    backgroundColor: 'white',
  },
});
