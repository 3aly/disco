import {View, Text} from 'react-native';
import React from 'react';
import styles from './TransactionsHeader.styles';

const TransactionsHeader = ({title}: {title: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TransactionsHeader;
