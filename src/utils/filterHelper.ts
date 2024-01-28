import {ExpenseItemType, TransactionItemType} from 'types';

type FilterType = 'All' | 'Personal' | 'Work';
interface Item {
  label: string;
}

function filterHelper<T extends TransactionItemType | ExpenseItemType>(
  array: T[],
  filterType: FilterType,
): T[] {
  if (filterType === 'All') {
    return array;
  } else {
    return array.filter(item => item.label === filterType);
  }
}

export default filterHelper;
