import cn from 'classnames';
import Image from 'next/image';

interface IProps {
  avatar: string;
  type: 'SENT' | 'RECEIVED';
  isWriting?: boolean;
  message?: string;
}

export default function Bubble({ avatar, type, isWriting, message }: IProps) {
  return (
    <div className='flex items-end space-x-1'>
      <div className={cn({ 'order-1 pl-1': type === 'SENT' })}>
        <Image
          src={avatar}
          width={28}
          height={28}
          className='rounded-full'
          objectFit='fill'
          unoptimized
        />
      </div>
      <div
        className={cn('px-4 py-2 rounded-lg max-w-fit', {
          'bg-slate-100 rounded-bl-none': type === 'RECEIVED',
          'bg-blue-400 rounded-tr-none text-white': type === 'SENT'
        })}>
        <p>{message}</p>
      </div>
    </div>
  );
}
