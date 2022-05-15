import { useMemo } from 'react';
import { useChatContext, useGetInstantAnswers, InstantAnswer } from '..';

export default function PanelInstantAnswers() {
  const { data } = useGetInstantAnswers();
  const { searchTerm } = useChatContext();

  const questionsAndAnswers = useMemo(
    () =>
      !searchTerm
        ? data
        : data.filter(
            ({ q, a }) => q.includes(searchTerm) || a.includes(searchTerm)
          ),
    [data, searchTerm]
  );

  return (
    <div className='space-y-1'>
      {questionsAndAnswers.map(({ q, a }) => (
        <InstantAnswer key={q} question={q} answer={a} />
      ))}
    </div>
  );
}
