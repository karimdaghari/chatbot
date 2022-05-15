import { useQuery } from 'react-query';
import fetcher from './fetcher';

interface IParams {
  endpoint: string;
  key: string;
  options?: RequestInit;
}

export default function useFetch<T>({ endpoint, key, options }: IParams) {
  return useQuery<T>(
    key,
    async () =>
      await fetcher(endpoint, {
        method: 'GET',
        ...options
      }),
    {
      keepPreviousData: true
    }
  );
}
