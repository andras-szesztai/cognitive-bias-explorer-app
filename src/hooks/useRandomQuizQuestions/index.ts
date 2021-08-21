import { useEffect, useState } from 'react'
import { usePrevious } from 'rooks'

import { getRandomQuizIndexes } from '../../utils/dataHelpers'

import { QuestionTypes } from '../../types/quiz'
import { IBiasData } from '../../types/data'

import { data } from '../../data/cognitiveBiases'

export interface IRandomQuizQuestions {
  correct: IBiasData
  incorrect: IBiasData[]
}

interface IParams {
  quizType: QuestionTypes | undefined
}

const useRandomQuizQuestions = ({ quizType }: IParams) => {
  const prevQuizType = usePrevious(quizType)
  const [randomQuizQuestions, setRandomQuizQuestions] = useState<
    IRandomQuizQuestions[] | undefined
  >(undefined)

  useEffect(() => {
    if (!!quizType && !prevQuizType) {
      const randomIndexes = getRandomQuizIndexes(20, 10)
      const questions = randomIndexes.map((index) => {
        const questionBias = data[index]
        const notCorrectBiasIndexes = getRandomQuizIndexes(6, 3, index)
        return {
          correct: questionBias,
          incorrect: notCorrectBiasIndexes.map((i) => data[i]),
        }
      })
      setRandomQuizQuestions(questions)
    }
  }, [quizType, prevQuizType])

  return randomQuizQuestions
}

export default useRandomQuizQuestions
