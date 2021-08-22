import { useState } from 'react'
import { isMobileOnly } from 'react-device-detect'

import {
  DesktopTabletQuizView,
  MobileQuizView,
} from '../../components/templates'

import {
  useCurrentQuizValues,
  useManageQuiz,
  useRandomQuizQuestions,
} from '../../hooks'

import { categoryColors } from '../../styles/colors'
import { IBiasData } from '../../types/data'
import { QuestionTypes } from '../../types/quiz'

const Quiz = () => {
  const [quizType, setQuizType] = useState<QuestionTypes | undefined>(undefined)
  const answerType =
    quizType === QuestionTypes.bias
      ? QuestionTypes.questionDef
      : QuestionTypes.bias

  const [isSelectOut, setIsSelectOut] = useState(false)
  const [isQuizOut, setIsQuizOut] = useState(true)
  const { currentQuestionIndex, setCurrentQuestionIndex, results, setResults } =
    useManageQuiz()
  const questions = useRandomQuizQuestions({ quizType })
  const { currentQuestion, currentResult, shuffledAnswers } =
    useCurrentQuizValues({
      quizType,
      questions,
      currentQuestionIndex,
      results,
    })

  const [moreInfoOption, setMoreInfoOption] = useState<IBiasData | undefined>(
    undefined
  )

  const handleQuestionClick = (answer: string) => {
    const newResults = results.map((result, i) =>
      i === currentQuestionIndex
        ? {
            result:
              answer === questions![currentQuestionIndex].correct[answerType],
            color: categoryColors[currentQuestion!.category],
          }
        : result
    )
    setResults(newResults)
  }
  const handleReset = () => {
    setQuizType(undefined)
    setCurrentQuestionIndex(0)
    setResults([...new Array(10)].map(() => undefined))
  }

  const isLast = currentQuestionIndex === results.length - 1

  const viewProps = {
    isQuizOut,
    setIsQuizOut,
    isSelectOut,
    setIsSelectOut,
    answerType,
    quizType,
    setQuizType,
    questions,
    currentQuestion,
    setCurrentQuestionIndex,
    shuffledAnswers,
    results,
    currentResult,
    setMoreInfoOption,
    isLast,
    moreInfoOption,
    handleQuestionClick,
    handleReset,
  }

  return (
    <>
      {!isMobileOnly && <DesktopTabletQuizView {...viewProps} />}
      {isMobileOnly && <MobileQuizView {...viewProps} />}
    </>
  )
}

export default Quiz
