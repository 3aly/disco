import {View, Text, ImageProps, Image} from 'react-native';
import React from 'react';
import styles from './Transaction.styles';

const Transaction = ({image, title, date, invoice}) => {
  console.log('image', image);
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
      <Text style={styles.percentage}>+ {invoice}$</Text>
    </View>
  );
};

export default Transaction;
