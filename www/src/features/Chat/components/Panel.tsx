import Tabs from '../../../components/Tabs';

export default function Panel() {
  return (
    <Tabs
      defaultIndex={0}
      tabs={[
        {
          title: 'Instant answers',
          content: ''
        },
        {
          title: 'Chat',
          content: ''
        }
      ]}
    />
  );
}
