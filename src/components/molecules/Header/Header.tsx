import {View, Text} from 'react-native';
import React from 'react';
import styles from './Header.styles';

const Header = ({title, number = 4}: {title: string; number: number}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.circle}>
        <Text style={styles.number}>{number}</Text>
      </View>
    </View>
  );
};

export default Header;
