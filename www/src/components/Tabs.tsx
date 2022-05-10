import { Tab } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import cn from 'classnames';

interface IProps {
  /*
   * sets the index of the default tab to be selected
   */
  defaultIndex?: number;
  tabs: {
    title: string;
    content: ReactNode;
  }[];
}

export default function Tabs({ tabs, defaultIndex }: IProps) {
  return (
    <Tab.Group defaultIndex={defaultIndex}>
      <Tab.List className='flex items-center w-full space-x-2'>
        {tabs.map(({ title }) => (
          <Tab key={title} as={Fragment}>
            {({ selected }) => (
              <button
                className={cn('px-4 py-2 rounded-full', {
                  'hover:bg-gray-100': !selected,
                  'bg-gray-100 font-medium': selected
                })}>
                {title}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabs.map(({ content, title }) => (
          <Tab.Panel key={`content-${title}`}>{content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
