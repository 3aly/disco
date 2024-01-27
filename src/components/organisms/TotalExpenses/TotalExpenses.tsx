import {t} from 'i18next';
import React, {useRef, useEffect, useState, memo} from 'react';

import styles from './TotalExpenses.styles';
import {
  FlatList,
  Dimensions,
  Platform,
  I18nManager,
  View,
  Pressable,
  Text,
} from 'react-native';
import {Expense, ExpensesHeader} from '/components';
import {ExpensesType} from 'types';
import {limiter, shuffler} from 'utils';

type props = {Expenses: Array<ExpensesType>};

const TotalExpenses = ({Expenses}: props) => {
  const totalExpenses = 5000;
  // const expensesData = [
  //   {title: 'Rent', percentage: 30},
  //   {title: 'Groceries', percentage: 25},
  //   {title: 'Utilities', percentage: 15},
  //   {title: 'Entertainment', percentage: 10},
  //   {title: 'Others', percentage: 20},
  // ];

  return (
    <>
      <ExpensesHeader title="Total Expenses" targetAmount={5000} />

      <FlatList
        data={limiter(shuffler(Expenses), 6)}
        renderItem={({item}) => {
          console.log(item.category.name);
          return (
            <>
              <Expense
                title={item.category.name}
                percentage={item.price}
                icon={item.icon}
              />
            </>
          );
        }}
      />
    </>
  );
};

export default TotalExpenses;
