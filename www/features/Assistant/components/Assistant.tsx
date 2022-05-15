import { Popover } from '@headlessui/react';
import { FiMessageCircle, FiX } from 'react-icons/fi';
import { Card } from '@components/index';
import { Panel, AssistantProvider } from '..';

export default function Assistant() {
  return (
    <AssistantProvider>
      <Popover className='relative'>
        {({ open }) => (
          <>
            <Popover.Button className='flex flex-col items-center justify-center p-4 bg-blue-500 rounded-full shadow-xl hover:bg-blue-600'>
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
            </Popover.Panel>
          </>
        )}
      </Popover>
    </AssistantProvider>
  );
}
