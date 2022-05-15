import { useMemo } from 'react';
import { useAssistantContext } from '../Assistant';
import useGetInstantAnswers from './useGetInstantAnswers';
import InstantAnswer from './InstantAnswer';

export default function PanelInstantAnswers() {
  const { data, isLoading } = useGetInstantAnswers();
  const { searchTerm } = useAssistantContext();

  const questionsAndAnswers = useMemo(
    () =>
      !searchTerm
        ? data
        : data?.filter(
            ({ question: q, answer: a }) =>
              q.includes(searchTerm) || a.includes(searchTerm)
          ),
    [data, searchTerm]
  );

  return (
    <div className='space-y-1'>
      {isLoading
        ? 'loading...'
        : questionsAndAnswers?.map(({ id, ...props }) => (
            <InstantAnswer key={id} {...props} />
          ))}
    </div>
  );
}
