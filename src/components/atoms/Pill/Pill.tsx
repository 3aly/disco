import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '/constants';
import {PillProps} from 'types';
import styles from './Pill.styles';

const Pill: React.FC<PillProps> = ({color, text, style}) => {
  return (
    <View style={[styles.pill, {backgroundColor: colors[color]}, style]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Pill;
