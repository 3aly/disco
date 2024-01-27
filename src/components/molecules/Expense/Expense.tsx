import {View, Text} from 'react-native';
import React from 'react';
import styles from './Expense.styles';
import {SVG} from 'components/atoms';

const Expense = ({
  icon,
  title,
  percentage: percentage,
}: {
  icon: 'Home' | 'Profile';
  title: string;
  percentage: number;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <SVG source={icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.percentage}>{percentage}%</Text>
    </View>
  );
};

export default Expense;
