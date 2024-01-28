import {useQuery} from '@tanstack/react-query';
import {queryExpenses} from 'services';

const useFetchExpenses = (options = {}) => {
  const query = useQuery({
    queryKey: ['useFetchExpenses'],
    queryFn: () => queryExpenses(),
    enabled: true,
    ...options, // Spread the additional options here
  });

  return query;
};

export default useFetchExpenses;
