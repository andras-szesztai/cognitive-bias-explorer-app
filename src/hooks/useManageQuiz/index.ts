import { useState } from 'react'

import { IQuizResult } from '../../types/quiz'

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
