import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Expense.styles';
import {Pill, SVG} from '/components';
import {ExpenseProps} from 'types';

const Expense = ({icon, title, percentage: percentage}: ExpenseProps) => {
  const animationDuration = 500;
  const framesPerSecond = 60;

  const [currentValue, setCurrentValue] = useState(0);
  const totalFrames = (animationDuration / 1000) * framesPerSecond;
  const step = percentage / totalFrames;

  useEffect(() => {
    if (currentValue < percentage) {
      const intervalId = setInterval(() => {
        setCurrentValue(prevValue => {
          const newValue = prevValue + step;
          return newValue >= percentage ? percentage : newValue;
        });
      }, 1000 / framesPerSecond);

      return () => clearInterval(intervalId);
    }
  }, [currentValue, percentage, step, framesPerSecond]);

  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <SVG source={icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Pill text={`${currentValue.toFixed(0)}%`} color="green" />
    </View>
  );
};

export default Expense;
