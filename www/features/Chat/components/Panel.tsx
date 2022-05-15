import { Tabs } from '@components/index';
import { useChatContext, PanelInstantAnswers } from '..';

export default function Panel() {
  const { setOpenTab } = useChatContext();

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
            <div className='overflow-y-auto max-h-72 overscroll-y-contain'></div>
          ),
          onClick: () => setOpenTab('CHAT')
        }
      ]}
    />
  );
}
