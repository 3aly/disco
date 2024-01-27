import React from 'react';

import styles from './Transactions.styles';
import {FlatList, View} from 'react-native';
import {Transaction, TransactionsHeader} from '/components/molecules';
import {TransactionsProps} from 'types';
import {TransactionItemSkeleton} from 'skeleton';

const Transactions = ({Transactions, isLoading}: TransactionsProps) => {
  const renderItem = ({item}) => {
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
  };
  return (
    <>
      <TransactionsHeader title="Transactions" />
      {isLoading ? (
        <>
          {[...new Array(4)]?.map((_, key) => {
            return (
              <View style={styles.skeleton}>
                <TransactionItemSkeleton />
              </View>
            );
          })}
        </>
      ) : (
        <>
          <FlatList
            data={Transactions}
            renderItem={renderItem}
            // ListHeaderComponent={ListHeaderComponent}
          />
        </>
      )}
    </>
  );
};

export default Transactions;
