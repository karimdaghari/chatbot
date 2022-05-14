import { Popover } from '@headlessui/react';
import { FiMessageCircle, FiX } from 'react-icons/fi';
import { Card } from '../../../components';
import { Panel, TextBox, ChatProvider } from '..';

export default function Chat() {
  return (
    <ChatProvider>
      <Popover className='relative'>
        {({ open }) => (
          <>
            <Popover.Button className='flex flex-col items-center justify-center p-4 bg-blue-400 rounded-full shadow-xl'>
              {open ? (
                <FiX className='w-6 h-6 stroke-2 stroke-white' />
              ) : (
                <FiMessageCircle className='w-6 h-6 stroke-2 stroke-white' />
              )}
            </Popover.Button>
            <Popover.Panel
              as={Card}
              className='absolute right-0 z-10 flex flex-col space-y-2 bottom-16 w-96'>
              <Panel />
              <TextBox />
            </Popover.Panel>
          </>
        )}
      </Popover>
    </ChatProvider>
  );
}
