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
