import {t} from 'i18next';
import React, {useRef, useEffect, useState, memo} from 'react';

import styles from './Transactions.styles';
import {FlatList} from 'react-native';
import {Transaction, TransactionsHeader} from '/components/molecules';
import {TransactionsProps} from 'types';

const Transactions = ({Transactions}: TransactionsProps) => {
  const expensesData = [
    {title: 'Rent', percentage: 30, date: '2014/01/01'},
    {title: 'Groceries', percentage: 25, date: '2014/01/01'},
    {title: 'Utilities', percentage: 15, date: '2014/01/01'},
    {title: 'Entertainment', percentage: 10, date: '2014/01/01'},
    {title: 'Others', percentage: 20, date: '2014/01/01'},
  ];
  console.log('Transactions', Transactions);

  return (
    <>
      <TransactionsHeader title="Transactions" />
      <FlatList
        data={Transactions}
        renderItem={({item}) => {
          console.log('item: ', item);
          return (
            <>
              <Transaction
                image={item.image}
                title={item.title}
                invoice={item.price}
                date={item.date}
              />
            </>
          );
        }}
        // ListHeaderComponent={ListHeaderComponent}
      />
    </>
  );
};

export default Transactions;
