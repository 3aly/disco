type FilterType = 'All' | 'Personal' | 'Work';
interface Item {
  label: string;
}

function filterHelper<T extends Item>(array: T[], filterType: FilterType): T[] {
  if (filterType === 'All') {
    return array;
  } else {
    return array.filter(item => item.label === filterType);
  }
}

export default filterHelper;
