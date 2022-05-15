interface IQuestion {
  id: number;
  created: string;
  text: string;
}

export interface IResult extends IQuestion {
  question: IQuestion;
}
