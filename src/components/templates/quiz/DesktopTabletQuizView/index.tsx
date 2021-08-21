import styled from '@emotion/styled'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { isUndefined } from 'lodash'

import {
  CloseIcon,
  CorrectMark,
  DesktopMainContainer,
  QuestionMark,
} from '../../../atoms'

import { QuestionTypes } from '../../../../types/quiz'

import { quizTypes } from '../../../../constants/quiz'

import { cardSpring, colors, fontSizesString } from '../../../../styles'
import { QuizCard } from '../../../atoms'
import { categoryColors, categoryLightColors } from '../../../../styles/colors'
import {
  useCurrentQuizValues,
  useManageQuiz,
  useRandomQuizQuestions,
} from '../../../../hooks'

interface IQuizProps {
  quizType: QuestionTypes | undefined
  setQuizType: (type: QuestionTypes) => void
}

const DesktopTabletQuizView = ({ quizType, setQuizType }: IQuizProps) => {
  const answerType =
    quizType === QuestionTypes.bias
      ? QuestionTypes.definition
      : QuestionTypes.bias

  const [isSelectOut, setIsSelectOut] = useState(false)
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

  console.log({ shuffledAnswers })

  const handleQuestionClick = (answer: string) => {
    const newResults = results.map((result, i) =>
      i === currentQuestionIndex
        ? answer === questions?.[currentQuestionIndex].correct[answerType]
        : result
    )
    setResults(newResults)
  }

  return (
    <DesktopMainContainer>
      <AnimatePresence onExitComplete={() => setIsSelectOut(true)}>
        {!quizType && (
          <ContentContainer
            initial={{ opacity: 0, y: -400 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 400 }}
            transition={cardSpring}
          >
            <MainText>Please select quiz type:</MainText>
            <SmallCardsContainer>
              {quizTypes.map(({ text, type }) => (
                <QuizCard
                  key={text}
                  text={text}
                  handleClick={() => setQuizType(type)}
                  isActive={false}
                  color={colors.darkGray}
                  colorLight={colors.lightGray}
                />
              ))}
            </SmallCardsContainer>
          </ContentContainer>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!!quizType &&
          questions &&
          isSelectOut &&
          currentQuestion &&
          shuffledAnswers && (
            <ContentContainer
              initial={{ opacity: 0, y: -400 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 400 }}
              transition={cardSpring}
            >
              <TopTextContainer>
                <ResultsContainer>
                  {results.map((result, i) => (
                    <Result key={i}>
                      {isUndefined(result) ? (
                        <QuestionMark height={14} />
                      ) : result ? (
                        <CorrectMark height={14} />
                      ) : (
                        <CloseIcon height={14} />
                      )}
                    </Result>
                  ))}
                </ResultsContainer>
                <FeedbackContainer>
                  {isUndefined(currentResult) ? (
                    <p>
                      Please select an answer for the following{' '}
                      {quizType === QuestionTypes.bias
                        ? 'cognitive bias'
                        : 'definition'}
                      :
                    </p>
                  ) : currentResult ? (
                    <p>Correct!</p>
                  ) : (
                    <p>
                      Incorrect! The correct answer was{' '}
                      {currentQuestion[answerType]}
                    </p>
                  )}
                  {!isUndefined(currentResult) && (
                    <p>
                      Click around to see find out more about the other options!
                    </p>
                  )}
                  {!isUndefined(currentResult) && <button>Next?</button>}
                </FeedbackContainer>
                <MainText>{currentQuestion[quizType]}</MainText>
              </TopTextContainer>
              <SmallCardsContainer>
                {shuffledAnswers.map((answer) => (
                  <QuizCard
                    key={answer[answerType]}
                    text={answer[answerType]}
                    handleClick={() => handleQuestionClick(answer[answerType])}
                    isActive={false}
                    color={categoryColors[answer.category]}
                    colorLight={categoryLightColors[answer.category]}
                  />
                ))}
              </SmallCardsContainer>
            </ContentContainer>
          )}
      </AnimatePresence>
    </DesktopMainContainer>
  )
}

const ContentContainer = styled(motion.div)`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-row-gap: 36px;
`

const MainText = styled.h2`
  font-size: ${fontSizesString.md};
  line-height: 1.3;
  user-select: none;
`

const SmallCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 36px;
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 24px;
`

const TopTextContainer = styled.div`
  display: grid;
  grid-row-gap: 8px;
`

const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 24px);
  grid-column-gap: 16px;
  align-items: center;
  margin-bottom: 8px;
`

const Result = styled.div`
  display: grid;
  align-content: center;
`

const FeedbackContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  align-items: center;
  grid-column-gap: 16px;
`

export default DesktopTabletQuizView
