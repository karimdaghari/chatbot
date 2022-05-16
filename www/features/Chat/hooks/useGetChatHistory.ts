import { compareAsc, parseISO } from 'date-fns';
import useFetch from 'hooks/useFetch';
import { useMemo } from 'react';
import { IChatHistory } from '..';

export default function useGetChatHistory() {
  const { data: _data, ...info } = useFetch<IChatHistory[]>({
    key: 'chat',
    endpoint: '/chat'
  });

  const data = useMemo(
    () =>
      _data
        ?.filter(({ text }) => text !== null)
        ?.map((d) => d)
        .sort(({ created_at: c1 }, { created_at: c2 }) =>
          compareAsc(parseISO(c1), parseISO(c2))
        ),
    [_data]
  );

  return {
    data,
    ...info
  };
}
