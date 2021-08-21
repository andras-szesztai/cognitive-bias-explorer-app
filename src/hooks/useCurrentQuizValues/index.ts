import { useEffect, useState } from 'react'
import { usePrevious } from 'rooks'
import { shuffle } from 'lodash'

import { IBiasData } from '../../types/data'
import { IQuizResult, QuestionTypes } from '../../types/quiz'
import { IRandomQuizQuestions } from '../useRandomQuizQuestions'

interface IParams {
  quizType: QuestionTypes | undefined
  questions: IRandomQuizQuestions[] | undefined
  currentQuestionIndex: number
  results: (IQuizResult | undefined)[]
}

const useCurrentQuizValues = ({
  quizType,
  questions,
  currentQuestionIndex,
  results,
}: IParams) => {
  const prevCurrentQuestionIndex = usePrevious(currentQuestionIndex)
  const prevQuizType = usePrevious(quizType)
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
  useEffect(() => {
    if (!!prevQuizType && !quizType) {
      setShuffledAnswers(undefined)
    }
  }, [quizType, prevQuizType])

  return { currentQuestion, currentResult, shuffledAnswers }
}

export default useCurrentQuizValues
