import { Tabs } from '../../../components';
import { useChatContext } from '..';

export default function Panel() {
  const { setOpenTab } = useChatContext();

  return (
    <Tabs
      defaultIndex={0}
      tabs={[
        {
          title: 'Instant answers',
          content: '',
          onClick: () => setOpenTab('INSTANT_ANSWERS')
        },
        {
          title: 'Chat',
          content: '',
          onClick: () => setOpenTab('CHAT')
        }
      ]}
    />
  );
}
