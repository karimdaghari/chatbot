import Bubble from './Bubble';

export default function Chat() {
  return (
    <div className='space-y-5'>
      <Bubble
        type='RECEIVED'
        avatar='https://static.botsrv2.com/website/img/quriobot_favicon.1727b193.png'
        message='Welcome!'
      />
      <Bubble
        type='SENT'
        avatar='https://static.botsrv2.com/website/img/quriobot_favicon.1727b193.png'
        message='I have a question!'
      />
    </div>
  );
}
