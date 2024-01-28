import {View, Text, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import styles from './Header.styles';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '/constants';
import {HeaderProps} from 'types';

const Header = ({title, number = 4}: HeaderProps) => {
  return (
    <LinearGradient
      angle={1}
      colors={[`${colors.blue}`, `${colors.blue}`]}
      start={{x: 0.8, y: 0}} // Start at left center
      end={{x: 1, y: 0.5}}
      style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.circle}>
        <Text style={styles.number}>{number}</Text>
      </View>
    </LinearGradient>
  );
};

export default Header;
