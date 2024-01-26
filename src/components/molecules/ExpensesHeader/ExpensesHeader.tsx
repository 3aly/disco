import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './ExpensesHeader.styles';

const ExpensesHeader = ({
  targetAmount,
  title,
}: {
  title: string;
  targetAmount: number;
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const step = targetAmount / 1000;

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentValue((prevValue) => prevValue + step);
  //     // Ensure currentValue does not exceed targetAmount
  //     if (currentValue >= targetAmount) {
  //       setCurrentValue(targetAmount);
  //       clearInterval(intervalId);
  //     }
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, [targetAmount, step]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.totalExpenses}>{currentValue.toFixed(2)}$</Text>
    </View>
  );
};

export default ExpensesHeader;
