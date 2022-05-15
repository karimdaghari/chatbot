import useFetch from 'hooks/useFetch';
import { useMemo } from 'react';
import { IResult } from './types';

export default function useGetInstantAnswers() {
  const { data: _data, ...info } = useFetch<IResult[]>({
    key: 'faq/questions',
    endpoint: '/faq/answer/'
  });

  const data = useMemo(
    () =>
      _data?.map(({ id, text: answer, question: { text: question } }) => ({
        id,
        question,
        answer
      })),
    [_data]
  );

  return {
    data,
    ...info
  };
}
