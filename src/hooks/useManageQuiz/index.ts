import { useState } from 'react'

export interface IQuizResult {
  result: boolean
  color: string
}

const useManageQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [results, setResults] = useState<(IQuizResult | undefined)[]>(
    [...new Array(10)].map(() => undefined)
  )

  return {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    results,
    setResults,
  }
}

export default useManageQuiz
