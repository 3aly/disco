import {ViewStyle} from 'react-native';
import {TransactionType} from './type';
export type TransactionsProps = {Transactions: Array<TransactionType>};

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
