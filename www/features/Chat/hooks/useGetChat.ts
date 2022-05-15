import useFetch from 'hooks/useFetch';
import { IChatHistory } from '..';

export default function useGetChatHistory() {
  return useFetch<IChatHistory[]>({
    key: 'chat',
    endpoint: '/chat'
  });
}
