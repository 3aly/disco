import {ImageProps} from 'react-native';

export type ColorsTypes = {
  blue: string;
  lightBlue: string;
  red: string;
  green: string;
  yellow: string;
  black: string;
  white: string;
};

export type svgType = {
  [key: string]: JSX.Element;
};
export type TransactionType = {
  image: ImageProps;
  title: string;
  date: string;
  price: number;
  label: string;
};
export type ExpensesType = {
  icon: svgType;
  title: string;
  percentage: number;
  label: string;
};
export type iconNames =
  | 'Home'
  | 'Retail'
  | 'Profile'
  | 'Search'
  | 'Favorite'
  | 'Notification'
  | 'Note';
export type ITap = {
  id: number;
  name: string;
};
export type ExpenseItemType = {
  category: {name: string};
  price: number;
  label?: string;

  icon: iconNames;
};
export type TransactionItemType = {
  image: string;
  title: string;
  label?: string;
  price: number;
  date: string;
};
