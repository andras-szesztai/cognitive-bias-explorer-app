import { useEffect, useState } from 'react'
import { usePrevious } from 'rooks'

import { IRandomQuizQuestions } from '../useRandomQuizQuestions'

import { IBiasData } from '../../types/data'
import { QuestionTypes } from '../../types/quiz'
import { shuffle } from 'lodash'

interface IParams {
  quizType: QuestionTypes | undefined
  questions: IRandomQuizQuestions[] | undefined
  currentQuestionIndex: number
  results: (boolean | undefined)[]
}

const useCurrentQuizValues = ({
  quizType,
  questions,
  currentQuestionIndex,
  results,
}: IParams) => {
  const prevCurrentQuestionIndex = usePrevious(currentQuestionIndex)
  const currentQuestion =
    quizType && questions && questions[currentQuestionIndex].correct
  const currentResult = results[currentQuestionIndex]

  const [shuffledAnswers, setShuffledAnswers] = useState<
    IBiasData[] | undefined
  >(undefined)
  useEffect(() => {
    const currentAnswers = quizType &&
      questions && [
        questions[currentQuestionIndex].correct,
        ...questions[currentQuestionIndex].incorrect,
      ]
    console.log({ currentAnswers })
    if (
      quizType &&
      ((!shuffledAnswers && !!questions) ||
        prevCurrentQuestionIndex !== currentQuestionIndex)
    ) {
      setShuffledAnswers(shuffle(currentAnswers))
    }
  }, [
    currentQuestionIndex,
    prevCurrentQuestionIndex,
    setShuffledAnswers,
    questions,
    quizType,
    shuffledAnswers,
  ])

  return { currentQuestion, currentResult, shuffledAnswers }
}

export default useCurrentQuizValues
