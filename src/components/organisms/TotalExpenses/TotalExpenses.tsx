import {t} from 'i18next';
import React, {useRef, useEffect, useState, memo} from 'react';

import styles from './TotalExpenses.styles';
import {FlatList, View, Text} from 'react-native';
import {Expense, ExpensesHeader} from '/components';
import {ExpenseItemType, ExpensesType} from 'types';
import {limiter, shuffler} from 'utils';
import {ExpenseItemSkeleton} from 'skeleton';

type props = {Expenses: Array<ExpenseItemType>; isLoading: boolean};

const TotalExpenses = ({Expenses, isLoading}: props) => {
  // const dispatch = useDispatch();

  const totalExpenses = Expenses?.reduce((sum, item) => sum + item.price, 0);

  const renderItem = ({item}: {item: ExpenseItemType}) => {
    return (
      <>
        <Expense
          key={item.id}
          title={item.category.name}
          percentage={item.price}
          icon={item.icon}
        />
      </>
    );
  };
  return (
    <>
      <ExpensesHeader title={'Total Expenses'} targetAmount={totalExpenses} />
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
