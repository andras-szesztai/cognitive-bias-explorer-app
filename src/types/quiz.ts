export type TQuestion = 'definition' | 'bias' | undefined

export enum QuestionTypes {
  definition = 'definition',
  bias = 'cognitiveBias',
}

export interface IQuizResult {
  result: boolean
  color: string
}
