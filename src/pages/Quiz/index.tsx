import { useState } from 'react'
import { isMobileOnly } from 'react-device-detect'

import { DesktopTabletQuizView } from '../../components/templates'

import { QuestionTypes } from '../../types/quiz'

import { Container } from './styles'

const Quiz = () => {
  const [quizType, setQuizType] = useState<QuestionTypes | undefined>(undefined)

  return (
    <Container>
      {!isMobileOnly && (
        <DesktopTabletQuizView
          quizType={quizType}
          setQuizType={(type: QuestionTypes) => setQuizType(type)}
        />
      )}
    </Container>
  )
}

export default Quiz
