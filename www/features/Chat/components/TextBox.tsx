import { Input } from '@components/index';
import { useChatContext } from '..';

export default function TextBox() {
  const { openTab, setSearchTerm } = useChatContext();

  return (
    <div className='flex items-center w-full'>
      <Input
        placeholder={
          openTab === 'INSTANT_ANSWERS'
            ? 'Search instant answers...'
            : 'Type your question...'
        }
        onChange={({ target: { value } }) => {
          if (openTab === 'CHAT') return;
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