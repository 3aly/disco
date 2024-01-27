import {t} from 'i18next';
import React, {useRef, useEffect, useState, memo} from 'react';

import styles from './TotalExpenses.styles';
import {FlatList, View, Text} from 'react-native';
import {Expense, ExpensesHeader} from '/components';
import {ExpensesType} from 'types';
import {limiter, shuffler} from 'utils';
import {ExpenseItemSkeleton, TransactionItemSkeleton} from 'skeleton';

type props = {Expenses: Array<ExpensesType>; isLoading: boolean};

const TotalExpenses = ({Expenses, isLoading}: props) => {
  const totalExpenses = 5000;

  const renderItem = ({item}) => {
    return (
      <>
        <Expense
          title={item.category.name}
          percentage={item.price}
          icon={item.icon}
        />
      </>
    );
  };
  return (
    <>
      <ExpensesHeader title={'Total Expenses'} targetAmount={5000} />
      {isLoading ? (
        <>
          {[...new Array(3)]?.map((_, key) => {
            return (
              <View style={styles.skeleton}>
                <ExpenseItemSkeleton />
              </View>
            );
          })}
        </>
      ) : (
        <>
          <FlatList
            data={limiter(shuffler(Expenses), 4)}
            renderItem={renderItem}
          />
        </>
      )}
    </>
  );
};

export default TotalExpenses;
