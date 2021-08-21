import { useState } from 'react'

const useManageQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [results, setResults] = useState<(boolean | undefined)[]>(
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
