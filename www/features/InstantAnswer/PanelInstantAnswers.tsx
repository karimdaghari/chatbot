import { useMemo } from 'react';
import { useAssistantContext } from '../Assistant';
import useGetInstantAnswers from './useGetInstantAnswers';
import InstantAnswer from './InstantAnswer';
import { Input } from '@components/index';

export default function PanelInstantAnswers() {
  const { data, isLoading } = useGetInstantAnswers();
  const { searchTerm, setSearchTerm } = useAssistantContext();

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
    <div className='space-y-4'>
      <div className='space-y-1'>
        {isLoading
          ? 'loading...'
          : questionsAndAnswers?.map(({ id, ...props }) => (
              <InstantAnswer key={id} {...props} />
            ))}
      </div>
      <Input
        placeholder='Search instant answers...'
        onChange={({ target: { value } }) => {
          if (value === '' || value === ' ') {
            setSearchTerm(null);
          } else {
            setSearchTerm(value);
          }
        }}
      />
    </div>
  );
}
