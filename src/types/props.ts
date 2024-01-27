import {StyleProp, ViewStyle} from 'react-native';
import {TransactionType} from './type';
export type TransactionsProps = {
  Transactions: Array<TransactionType>;
  isLoading: boolean;
};

export type SvgProps = {
  source:
    | 'Home'
    | 'Retail'
    | 'Profile'
    | 'Search'
    | 'Favorite'
    | 'Notification'
    | 'Note';

  style?: ViewStyle;
  color?: string;
  onPress?: Function;
};
export type PillProps = {
  text: string;
  color: 'red' | 'green';
  style?: StyleProp<ViewStyle>;
};
