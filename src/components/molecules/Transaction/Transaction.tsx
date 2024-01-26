import {View, Text, ImageProps} from 'react-native';
import React from 'react';
import styles from './Transaction.styles';

const Transaction = ({
  icon,
  title,
  date,
  invoice,
}: {
  icon?: ImageProps;
  title: string;
  date: string;
  invoice: number;
}) => {
  return (
    <View style={styles.container}>
      {/* <Image source={icon} /> */}
      <View style={styles.date}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.percentage}>+ {invoice}$</Text>
    </View>
  );
};

export default Transaction;
