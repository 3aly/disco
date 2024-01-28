import {useQuery} from '@tanstack/react-query';
import {queryTransactions} from 'services';

const useFetchTransactions = (options = {}) => {
  const query = useQuery({
    queryKey: ['useFetchTransactions'],
    queryFn: () => queryTransactions(),
    enabled: true,
    ...options, // Spread the additional options here
  });

  return query;
};

export default useFetchTransactions;
