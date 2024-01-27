import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Home.styles';
import {Header, TopTabs, TotalExpenses, Transactions} from 'components';
import {useFetchExpenses, useFetchTransactions} from 'hooks';
import {
  generateRandomDate,
  generateRandomIcon,
  generateRandomLabel,
} from 'utils';
import {ExpensesType, TransactionType} from 'types';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [alteredTransactions, setAlteredTransactions] = useState<
    Array<TransactionType>
  >([]);
  const [alteredExpenses, setAlteredExpenses] = useState<Array<ExpensesType>>(
    [],
  );

  const handlePress = (_: string, id: number) => {
    setSelectedTab(id);
  };
  const {data: TransactionsData, isLoading: isTransactionsLoading} =
    useFetchTransactions();
  const {data: ExpensesData, isLoading: isExpensesLoading} = useFetchExpenses();
  useEffect(() => {
    const tamp = TransactionsData?.map((item: TransactionType) => {
      return {
        ...item,
        date: generateRandomDate(),
        label: generateRandomLabel(),
      };
    });

    setAlteredTransactions(tamp);
  }, [TransactionsData]);
  useEffect(() => {
    const temp = ExpensesData?.map((item: TransactionType) => {
      return {
        ...item,
        label: generateRandomLabel(),

        icon: generateRandomIcon(),
      };
    });
    setAlteredExpenses(temp);
  }, [ExpensesData]);

  return (
    <View style={styles.container}>
      <Header title="Budget" number={5} />
      <TopTabs
        onPressFn={handlePress}
        initialTab={0}
        activeTab={selectedTab}
        Tabs={[
          {
            id: 0,
            name: 'All',
          },
          {
            id: 1,
            name: 'Personal',
          },
          {
            id: 2,
            name: 'Work',
          },
        ]}
      />
      {selectedTab === 0 && (
        <>
          <TotalExpenses
            Expenses={alteredExpenses}
            isLoading={isExpensesLoading}
          />
          <Transactions
            isLoading={isTransactionsLoading}
            Transactions={alteredTransactions}
          />
        </>
      )}
      {selectedTab === 1 && (
        <>
          <TotalExpenses
            isLoading={isExpensesLoading}
            Expenses={alteredExpenses?.filter(item => {
              return item.label === 'Personal';
            })}
          />
          <Transactions
            isLoading={isTransactionsLoading}
            Transactions={alteredTransactions?.filter(item => {
              return item.label === 'Personal';
            })}
          />
        </>
      )}
      {selectedTab === 2 && (
        <>
          <TotalExpenses
            isLoading={isExpensesLoading}
            Expenses={alteredExpenses?.filter(item => {
              return item.label === 'Personal';
            })}
          />
          <Transactions
            isLoading={isTransactionsLoading}
            Transactions={alteredTransactions?.filter(item => {
              return item.label === 'Work';
            })}
          />
        </>
      )}
    </View>
  );
};

export default Home;
