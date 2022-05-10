import { Input } from '../../../components';
import { useChatContext } from '../context/Chat.context';

export default function TextBox() {
  const { openTab } = useChatContext();

  return (
    <div className='flex items-center w-full'>
      <Input
        placeholder={
          openTab === 'INSTANT_ANSWERS'
            ? 'Search instant answers...'
            : 'Type your question...'
        }
      />
    </div>
  );
}
