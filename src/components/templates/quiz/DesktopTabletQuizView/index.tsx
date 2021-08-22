import styled from '@emotion/styled'
import { Dispatch, SetStateAction } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { isUndefined } from 'lodash'

import {
  DesktopMainContainer,
  QuizCard,
  QuizFeedback,
  QuizMoreInfoOption,
  QuizResults,
} from '../../../atoms'

import { alphabet, quizTypes } from '../../../../constants/quiz'

import { categoryColors, categoryLightColors } from '../../../../styles/colors'
import {
  breakPoints,
  cardSpring,
  colors,
  durations,
  fontSizesString,
} from '../../../../styles'

import { IQuizResult, QuestionTypes } from '../../../../types/quiz'
import { IBiasData } from '../../../../types/data'
import { IRandomQuizQuestions } from '../../../../hooks/useRandomQuizQuestions'

export interface IQuizViewProps {
  isQuizOut: boolean
  setIsQuizOut: Dispatch<SetStateAction<boolean>>
  isSelectOut: boolean
  setIsSelectOut: Dispatch<SetStateAction<boolean>>
  answerType: QuestionTypes
  quizType: QuestionTypes | undefined
  setQuizType: Dispatch<SetStateAction<QuestionTypes | undefined>>
  questions: IRandomQuizQuestions[] | undefined
  currentQuestion: IBiasData | undefined
  setCurrentQuestionIndex: Dispatch<SetStateAction<number>>
  shuffledAnswers: IBiasData[] | undefined
  results: (IQuizResult | undefined)[]
  currentResult: IQuizResult | undefined
  setMoreInfoOption: Dispatch<SetStateAction<IBiasData | undefined>>
  isLast: boolean
  moreInfoOption: IBiasData | undefined
  handleQuestionClick: (answer: string) => void
  handleReset: () => void
}

const DesktopTabletQuizView = ({
  isQuizOut,
  setIsQuizOut,
  isSelectOut,
  setIsSelectOut,
  quizType,
  setQuizType,
  questions,
  currentQuestion,
  shuffledAnswers,
  results,
  currentResult,
  setMoreInfoOption,
  answerType,
  moreInfoOption,
  handleQuestionClick,
  ...restProps
}: IQuizViewProps) => {
  return (
    <DesktopMainContainer withMarginBottom>
      <AnimatePresence
        onExitComplete={() => {
          setIsQuizOut(false)
          setIsSelectOut(true)
        }}
      >
        {!quizType && isQuizOut && (
          <ContentContainer
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0, transition: { delay: durations.md } }}
            exit={{ opacity: 0, y: 80 }}
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
                  color={colors.lightGray}
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
        {!!(
          quizType &&
          questions &&
          isSelectOut &&
          currentQuestion &&
          shuffledAnswers
        ) && (
          <ContentContainer
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={cardSpring}
          >
            <TopTextContainer>
              <QuizResults results={results} />
              <QuizFeedback
                {...restProps}
                quizType={quizType}
                currentQuestion={currentQuestion}
                shuffledAnswers={shuffledAnswers}
                currentResult={currentResult}
                setMoreInfoOption={setMoreInfoOption}
                answerType={answerType}
              />
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
            <QuizMoreInfoOption
              currentResult={currentResult}
              moreInfoOption={moreInfoOption}
            />
          </ContentContainer>
        )}
      </AnimatePresence>
    </DesktopMainContainer>
  )
}

const ContentContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  max-height: 100%;
  min-height: 100%;

  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-row-gap: 36px;

  overflow-y: auto;

  @media (max-width: ${breakPoints.second}) {
    grid-row-gap: 24px;
  }

  @media (max-width: ${breakPoints.third}) {
    grid-row-gap: 16px;
  }
`

export const MainText = styled.h2`
  font-size: ${fontSizesString.md};
  line-height: 1.3;
  user-select: none;

  @media (max-width: ${breakPoints.fifth}) {
    font-size: ${fontSizesString.default};
    line-height: 1.4;
  }
`

export const SmallCardsContainer = styled.div`
  place-self: stretch;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 36px;
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 24px;

  @media (max-width: ${breakPoints.second}) {
    grid-column-gap: 24px;
    grid-row-gap: 16px;
  }

  @media (max-width: ${breakPoints.third}) {
    grid-column-gap: 16px;
  }

  @media (max-width: ${breakPoints.fifth}) {
    grid-template-columns: 1fr;
  }
`

export const TopTextContainer = styled.div`
  display: grid;
  grid-row-gap: 16px;
  grid-template-rows: min-content 28px min-content;

  @media (max-width: ${breakPoints.second}) {
    grid-row-gap: 8px;
  }

  @media (max-width: ${breakPoints.fifth}) {
    grid-template-rows: min-content 72px min-content;
  }
`

export default DesktopTabletQuizView
