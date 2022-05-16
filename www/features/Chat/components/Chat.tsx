import Input from '@components/Input';
import fetcher from 'hooks/fetcher';
import { useForm } from 'react-hook-form';
import { FiSend } from 'react-icons/fi';
import { useMutation } from 'react-query';
import { useGetChatHistory } from '..';
import Bubble from './Bubble';
import { BiLoaderAlt } from 'react-icons/bi';
import { useKey } from 'react-use';
import { useRouter } from 'next/router';

interface INewMessage {
  text: string;
}

type TNewMessage = Record<string | 'created_at', string>;

export default function Chat() {
  const { replace } = useRouter();
  const { data, refetch, isLoading } = useGetChatHistory();
  console.log({ data });
  const { register, handleSubmit, getValues, reset } = useForm<INewMessage>();
  const { mutateAsync: sendMessage } = useMutation<
    TNewMessage,
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
      onSuccess: async ({ created_at }) => {
        await refetch();
        reset();
        replace(`#${created_at}`, '', {
          shallow: true
        });
      }
    }
  );

  useKey('enter', async () => {
    const { text } = getValues();
    if (!text) return;
    await sendMessage({ text });
  });

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
              <div className='space-y-6' id={created_at} key={created_at}>
                <div>
                  <div className='flex justify-end w-full'>
                    <Bubble
                      type='SENT'
                      className='last:bg-blue-600'
                      message={text}
                    />
                  </div>
                </div>
                <Bubble
                  type='RECEIVED'
                  avatar='https://static.botsrv2.com/website/img/quriobot_favicon.1727b193.png'
                  message={bot_reply}
                />
              </div>
            ))}
          </>
        )}
      </div>
      <form
        onSubmit={handleSubmit(async (input) => {
          if (!input.text) return;
          await sendMessage(input);
        })}
        className='flex items-center w-full space-x-1.5'>
        <Input {...register('text')} placeholder='Ask a question...' />
        <button type='submit' className='p-3 bg-blue-500 rounded-full'>
          <FiSend className='text-white' />
        </button>
      </form>
    </div>
  );
}
