interface IProps {
  question: string;
  answer: string;
}

export default function InstantAnswer({ question, answer }: IProps) {
  return (
    <div className='p-4 -space-y-1 hover:bg-slate-100 hover:rounded-lg'>
      <p className='font-medium'> {question}</p>
      <p>{answer}</p>
    </div>
  );
}
