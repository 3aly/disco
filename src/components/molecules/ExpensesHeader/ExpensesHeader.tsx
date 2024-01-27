import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './ExpensesHeader.styles';

const ExpensesHeader = ({
  targetAmount,
  title,
}: {
  title: string;
  targetAmount: number;
}) => {
  const animationDuration = 500;
  const framesPerSecond = 60;

  const [currentValue, setCurrentValue] = useState(0);
  const totalFrames = (animationDuration / 1000) * framesPerSecond;
  const step = targetAmount / totalFrames;

  useEffect(() => {
    if (currentValue < targetAmount) {
      const intervalId = setInterval(() => {
        setCurrentValue(prevValue => {
          const newValue = prevValue + step;
          return newValue >= targetAmount ? targetAmount : newValue;
        });
      }, 1000 / framesPerSecond);

      return () => clearInterval(intervalId);
    }
  }, [currentValue, targetAmount, step, framesPerSecond]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.totalExpenses}>{currentValue.toFixed(2)}$</Text>
    </View>
  );
};

export default ExpensesHeader;
