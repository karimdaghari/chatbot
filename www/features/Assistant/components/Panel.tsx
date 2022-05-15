import { Tabs } from '@components/index';
import { Chat } from '@features/Chat';
import { PanelInstantAnswers } from '@features/InstantAnswer';
import { useAssistantContext } from '..';

export default function Panel() {
  const { setOpenTab } = useAssistantContext();

  return (
    <Tabs
      defaultIndex={0}
      tabs={[
        {
          title: 'Instant answers',
          content: (
            <div className='overflow-y-auto max-h-72 overscroll-y-contain'>
              <PanelInstantAnswers />
            </div>
          ),
          onClick: () => setOpenTab('INSTANT_ANSWERS')
        },
        {
          title: 'Chat',
          content: (
            <div className='p-4 overflow-y-auto max-h-72 overscroll-y-contain'>
              <Chat />
            </div>
          ),
          onClick: () => setOpenTab('CHAT')
        }
      ]}
    />
  );
}
