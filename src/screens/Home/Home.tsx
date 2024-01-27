import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Home.styles';
import {Header, TopTabs, TotalExpenses, Transactions} from 'components';
import {useFetchExpenses, useFetchTransactions} from 'hooks';
import {
  filterHelper,
  generateRandomDate,
  generateRandomIcon,
  generateRandomLabel,
} from 'utils';
import {ExpensesType, TransactionType} from 'types';
import {Tabs} from 'fakers';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedTabName, setSelectedTabName] = useState<
    'All' | 'Work' | 'Personal'
  >('All');
  const [alteredTransactions, setAlteredTransactions] = useState<
    Array<TransactionType>
  >([]);
  const [alteredExpenses, setAlteredExpenses] = useState<Array<ExpensesType>>(
    [],
  );

  const handlePress = (name: 'All' | 'Work' | 'Personal', id: number) => {
    setSelectedTab(id);
    setSelectedTabName(name);
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
        Tabs={Tabs}
      />

      <TotalExpenses
        Expenses={filterHelper(alteredExpenses, selectedTabName)}
        isLoading={isExpensesLoading}
      />
      <Transactions
        isLoading={isTransactionsLoading}
        Transactions={filterHelper(alteredTransactions, selectedTabName)}
      />
    </View>
  );
};

export default Home;
