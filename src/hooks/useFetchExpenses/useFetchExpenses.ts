import {QueryOptions, useQuery} from '@tanstack/react-query';
import {queryExpenses} from 'services';

const useFetchExpenses = () => {
  const query = useQuery({
    queryKey: ['useFetchExpenses'],
    queryFn: () => queryExpenses(),
    enabled: true,
  });

  return query;
};
export default useFetchExpenses;
