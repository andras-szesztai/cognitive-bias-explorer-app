import styled from '@emotion/styled'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { isUndefined } from 'lodash'

import {
  ChevronIcon,
  CloseIcon,
  CorrectMark,
  DesktopMainContainer,
  HomeBigCard,
  QuestionMark,
  QuizCard,
} from '../../../atoms'

import {
  useCurrentQuizValues,
  useManageQuiz,
  useRandomQuizQuestions,
} from '../../../../hooks'

import { QuestionTypes } from '../../../../types/quiz'
import { IBiasData } from '../../../../types/data'

import { quizTypes } from '../../../../constants/quiz'

import { categoryColors, categoryLightColors } from '../../../../styles/colors'
import {
  cardSpring,
  colors,
  durations,
  fontSizesString,
  getOpacityInOut,
} from '../../../../styles'
interface IQuizProps {
  quizType: QuestionTypes | undefined
  setQuizType: (type: QuestionTypes) => void
  onReset: () => void
}

const alphabet = ['A', 'B', 'C', 'D']

const DesktopTabletQuizView = ({
  quizType,
  setQuizType,
  onReset,
}: IQuizProps) => {
  const answerType =
    quizType === QuestionTypes.bias
      ? QuestionTypes.definition
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
    onReset()
    setCurrentQuestionIndex(0)
    setResults([...new Array(10)].map(() => undefined))
  }

  const isLast = currentQuestionIndex === results.length - 1

  return (
    <DesktopMainContainer>
      <AnimatePresence
        onExitComplete={() => {
          setIsQuizOut(false)
          setIsSelectOut(true)
        }}
      >
        {!quizType && isQuizOut && (
          <ContentContainer
            initial={{ opacity: 0, y: -400 }}
            animate={{ opacity: 1, y: 0, transition: { delay: durations.md } }}
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
      <AnimatePresence
        onExitComplete={() => {
          setIsSelectOut(false)
          setIsQuizOut(true)
        }}
      >
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
                      ) : result.result ? (
                        <CorrectMark fill={result.color} height={14} />
                      ) : (
                        <CloseIcon fill={result.color} height={14} />
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
                  ) : currentResult.result ? (
                    <p>Correct!</p>
                  ) : (
                    <p>
                      Incorrect! The correct answer was{' '}
                      {
                        alphabet[
                          shuffledAnswers.findIndex(
                            (a) => a[answerType] === currentQuestion[answerType]
                          )
                        ]
                      }
                    </p>
                  )}
                  <AnimatePresence>
                    {!isUndefined(currentResult) && (
                      <NextButton
                        {...getOpacityInOut()}
                        onClick={() => {
                          if (!isLast) {
                            setCurrentQuestionIndex((prev) => prev + 1)
                          } else {
                            handleReset()
                          }
                        }}
                      >
                        {isLast ? (
                          <p>New round?</p>
                        ) : (
                          <>
                            <p>Next question</p>
                            <IconContainer>
                              <ChevronIcon height={6} fill={colors.white} />
                            </IconContainer>
                          </>
                        )}
                      </NextButton>
                    )}
                  </AnimatePresence>
                </FeedbackContainer>
                <MainText>{currentQuestion[quizType]}</MainText>
              </TopTextContainer>
              <SmallCardsContainer>
                {shuffledAnswers.map((answer, i) => (
                  <QuizCard
                    key={answer[answerType]}
                    text={`${alphabet[i]} • ${answer[answerType]}`}
                    handleClick={() =>
                      isUndefined(currentResult)
                        ? handleQuestionClick(answer[answerType])
                        : setMoreInfoOption(answer)
                    }
                    isActive={false}
                    color={categoryColors[answer.category]}
                    colorLight={categoryLightColors[answer.category]}
                  />
                ))}
              </SmallCardsContainer>
              {!isUndefined(currentResult) &&
                (!moreInfoOption ? (
                  <p>
                    Click around to see find out more about the other options!
                  </p>
                ) : (
                  <HomeBigCard
                    color={categoryLightColors[moreInfoOption.category]}
                    colorDark={categoryColors[moreInfoOption.category]}
                    title={moreInfoOption.cognitiveBias}
                    subtitle={moreInfoOption.subCategory}
                    paragraph={moreInfoOption.definition}
                    noMaxHeight
                  />
                ))}
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
  grid-template-rows: min-content 28px min-content;
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
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  justify-content: space-between;
`

const NextButton = styled(motion.button)`
  text-align: left;
  padding: 2px 8px;
  border: none;
  border-radius: 4px;
  background-color: ${colors.darkGray};
  color: ${colors.white};
  cursor: pointer;

  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
`

const IconContainer = styled.span`
  transform: rotate(-90deg);
`

export default DesktopTabletQuizView
