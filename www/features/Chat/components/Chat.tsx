import Input from '@components/Input';
import fetcher from 'hooks/fetcher';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { FiSend } from 'react-icons/fi';
import { useMutation } from 'react-query';
import { useGetChatHistory } from '..';
import Bubble from './Bubble';
import { BiLoaderAlt } from 'react-icons/bi';

interface INewMessage {
  text: string;
}
export default function Chat() {
  const { data, refetch, isLoading } = useGetChatHistory();
  const { mutateAsync: sendMessage } = useMutation<
    unknown,
    unknown,
    INewMessage
  >(
    'sendMessage',
    async (input) =>
      await fetcher('/chat/', {
        method: 'POST',
        body: JSON.stringify(input)
      }),
    {
      onSuccess: async () => await refetch()
    }
  );

  const { register, handleSubmit } = useForm<INewMessage>();

  return (
    <div className='space-y-6'>
      <div className='p-4 space-y-6 overflow-y-auto max-h-72 overscroll-y-contain'>
        {isLoading ? (
          <div className='flex items-center justify-center w-full'>
            <BiLoaderAlt className='w-5 h-5 animate-spin' />
          </div>
        ) : (
          <>
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
                    className='last:bg-blue-600'
                    message={text}
                  />
                </div>
              </Fragment>
            ))}
          </>
        )}
      </div>
      <form
        onSubmit={handleSubmit(async (input) => await sendMessage(input))}
        className='flex items-center w-full space-x-1.5'>
        <Input {...register('text')} placeholder='Ask a question...' />
        <button type='submit' className='p-3 bg-blue-500 rounded-full'>
          <FiSend className='text-white' />
        </button>
      </form>
    </div>
  );
}
