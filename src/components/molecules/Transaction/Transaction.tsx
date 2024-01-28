import {View, Text, ImageProps, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Transaction.styles';
import {Pill} from 'components/atoms';
import {TransactionItemType} from 'types';

const Transaction = ({image, title, date, price}: TransactionItemType) => {
  console.log('image', image);
  const animationDuration = 500;
  const framesPerSecond = 60;

  const [currentValue, setCurrentValue] = useState(0);
  const totalFrames = (animationDuration / 1000) * framesPerSecond;
  const step = price / totalFrames;

  useEffect(() => {
    if (currentValue < price) {
      const intervalId = setInterval(() => {
        setCurrentValue(prevValue => {
          const newValue = prevValue + step;
          return newValue >= price ? price : newValue;
        });
      }, 1000 / framesPerSecond);

      return () => clearInterval(intervalId);
    }
  }, [currentValue, price, step, framesPerSecond]);

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        {/* <Text style={styles.title}>{title?.slice(0, 20)}</Text> */}

        <Image
          source={{uri: image}} // Assuming image is a valid URL string
          style={styles.image} // Added image styling
          resizeMode="cover" // Optional: Adjust image display within container
        />
        <View>
          <Text style={styles.title}>{title?.slice(0, 20)}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <Pill text={`- ${currentValue.toFixed(0)}$`} color="red" />
      {/* <Text style={styles.percentage}>- </Text> */}
    </View>
  );
};

export default Transaction;
