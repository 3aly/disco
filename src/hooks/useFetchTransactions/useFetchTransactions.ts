import {QueryOptions, useQuery} from '@tanstack/react-query';
import {queryTransactions} from 'services';

const useFetchTransactions = () => {
  const query = useQuery({
    queryKey: ['useFetchTransactions'],
    queryFn: () => queryTransactions(),
    enabled: true,
  });

  return query;
};
export default useFetchTransactions;
