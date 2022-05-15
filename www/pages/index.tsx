import { Chat } from '@features/Chat';

export default function Index() {
  return (
    <div className='relative flex flex-col items-center justify-center h-screen bg-green-200'>
      <p>Hello!</p>
      <div className='absolute bottom-4 right-4'>
        <Chat />
      </div>
    </div>
  );
}
