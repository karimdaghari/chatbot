interface IProps {
  question: string;
  answer: string;
}

export default function InstantAnswer({ question, answer }: IProps) {
  return (
    <div>
      <p className='font-medium'>Q: {question}</p>
      <p>A: {answer}</p>
    </div>
  );
}
