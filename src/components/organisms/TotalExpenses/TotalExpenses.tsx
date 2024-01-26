import { t } from "i18next";
import React, { useRef, useEffect, useState, memo } from "react";

import styles from "./TotalExpenses.styles";
import {
  FlatList,
  Dimensions,
  Platform,
  I18nManager,
  View,
  Pressable,
  Text,
} from "react-native";
import { Expense, ExpensesHeader } from "@components/molecules";

type props = {};

const TotalExpenses = ({}: props) => {
  const totalExpenses = 5000;
  const expensesData = [
    { title: "Rent", percentage: 30 },
    { title: "Groceries", percentage: 25 },
    { title: "Utilities", percentage: 15 },
    { title: "Entertainment", percentage: 10 },
    { title: "Others", percentage: 20 },
  ];

  return (
    <>
      <ExpensesHeader title="Total Expenses" targetAmount={5000} />

      <FlatList
        data={expensesData}
        renderItem={({ item }) => (
          <Expense title={item.title} percentage={item.percentage} />
        )}
        // ListHeaderComponent={ListHeaderComponent}
      />
    </>
  );
};

export default TotalExpenses;
