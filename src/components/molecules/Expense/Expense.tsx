import {View, Text} from 'react-native';
import React from 'react';
import styles from './Expense.styles';
import {Pill, SVG} from '/components';

const Expense = ({
  icon,
  title,
  percentage: percentage,
}: {
  icon: 'Home' | 'Profile';
  title: string;
  percentage: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <SVG source={icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Pill text={`${percentage}%`} color="green" />
    </View>
  );
};

export default Expense;
