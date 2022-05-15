import { useQuery } from 'react-query';

interface IParams {
  endpoint: string;
  key: string;
  options?: RequestInit;
}

export default function useFetch<T>({ endpoint, key, options }: IParams) {
  return useQuery<T>(key, async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      ...options
    });
    const json = res.json();
    return json;
  });
}
