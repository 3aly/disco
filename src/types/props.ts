import {StyleProp, ViewStyle} from 'react-native';
import {
  ExpenseItemType,
  ExpensesType,
  ITap,
  TransactionItemType,
  TransactionType,
  iconNames,
} from './type';
export type TransactionsProps = {
  Transactions: Array<TransactionItemType>;
  isLoading: boolean;
};
export type TransactionProps = {
  image: string;
  title: string;
  label?: string;
  price: number;
  date: string;
};

export type SvgProps = {
  source: iconNames;

  style?: ViewStyle;
  color?: string;
  onPress?: Function;
};
export type PillProps = {
  text: string;
  color: 'red' | 'green';
  style?: StyleProp<ViewStyle>;
};
export type ExpenseProps = {
  icon: iconNames;
  title: string;
  percentage: number;
};
export type ExpenseHeaderProps = {
  title: string;
  targetAmount: number;
};
export type HeaderProps = {
  title: string;
  number: number;
};
export type FilterScrollTabsProps = {
  Tabs: ITap[];
  onPressFn: Function;
  activeTab: number;
  initialTab?: number;
};
export type TotalExpensesProps = {
  Expenses: Array<ExpensesType>;
  isLoading: boolean;
};
