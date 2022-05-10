import { Popover } from '@headlessui/react';
import { FiMessageCircle } from 'react-icons/fi';
import Card from '../../../components/Card';

export default function Chat() {
  return (
    <Popover className='relative'>
      <Popover.Button className='flex flex-col items-center justify-center p-4 bg-blue-400 rounded-full shadow-xl'>
        <FiMessageCircle className='w-6 h-6 stroke-2 stroke-white' />
      </Popover.Button>
      <Popover.Panel as={Card} className='absolute right-0 z-10 bottom-16'>
        <p>Menu goes here...</p>
      </Popover.Panel>
    </Popover>
  );
}
