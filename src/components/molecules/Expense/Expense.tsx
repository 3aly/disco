import { View, Text } from "react-native";
import React from "react";
import styles from "./Expense.styles";

const Expense = ({
  icon,
  title,
  percentage: percentage,
}: {
  icon?: string;
  title: string;
  percentage: number;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.percentage}>{percentage}%</Text>
    </View>
  );
};

export default Expense;
