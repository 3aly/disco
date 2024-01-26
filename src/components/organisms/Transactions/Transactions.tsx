import {t} from 'i18next';
import React, {useRef, useEffect, useState, memo} from 'react';

import styles from './Transactions.styles';
import {FlatList} from 'react-native';
import {Transaction, TransactionsHeader} from '/components/molecules';

type props = {};

const Transactions = ({}: props) => {
  const expensesData = [
    {title: 'Rent', percentage: 30, date: '2014/01/01'},
    {title: 'Groceries', percentage: 25, date: '2014/01/01'},
    {title: 'Utilities', percentage: 15, date: '2014/01/01'},
    {title: 'Entertainment', percentage: 10, date: '2014/01/01'},
    {title: 'Others', percentage: 20, date: '2014/01/01'},
  ];

  return (
    <>
      <TransactionsHeader title="Transactions" />
      <FlatList
        data={expensesData}
        renderItem={({item}) => (
          <Transaction
            title={item.title}
            invoice={item.percentage}
            date={item.date}
          />
        )}
        // ListHeaderComponent={ListHeaderComponent}
      />
    </>
  );
};

export default Transactions;
