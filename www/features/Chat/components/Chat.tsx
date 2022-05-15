import { Fragment } from 'react';
import useGetChatHistory from '../hooks/useGetChat';
import Bubble from './Bubble';

export default function Chat() {
  const { data } = useGetChatHistory();

  return (
    <div className='space-y-6'>
      <Bubble
        type='RECEIVED'
        avatar='https://static.botsrv2.com/website/img/quriobot_favicon.1727b193.png'
        message='Welcome!'
      />
      {data?.map(({ created_at, bot_reply, text }) => (
        <Fragment key={created_at}>
          <div>
            <Bubble
              type='RECEIVED'
              avatar='https://static.botsrv2.com/website/img/quriobot_favicon.1727b193.png'
              message={bot_reply}
            />
          </div>
          <div className='flex justify-end w-full'>
            <Bubble
              type='SENT'
              avatar='https://static.botsrv2.com/website/img/quriobot_favicon.1727b193.png'
              message={text}
            />
          </div>
        </Fragment>
      ))}
    </div>
  );
}
