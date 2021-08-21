export type TQuestion = 'definition' | 'bias' | undefined

export enum QuestionTypes {
  questionDef = 'questionDef',
  bias = 'cognitiveBias',
}

export interface IQuizResult {
  result: boolean
  color: string
}
