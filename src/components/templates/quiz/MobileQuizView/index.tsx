import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import { isUndefined } from 'lodash'

import {
  MobileMainContainer,
  QuizCard,
  QuizFeedback,
  QuizMoreInfoOption,
  QuizResults,
  TitleLogo,
} from '../../../atoms'

import {
  IQuizViewProps,
  MainText,
  SmallCardsContainer,
  TopTextContainer,
} from '../DesktopTabletQuizView'

import { alphabet, quizTypes } from '../../../../constants/quiz'

import { cardSpring, colors, durations } from '../../../../styles'
import { categoryColors, categoryLightColors } from '../../../../styles/colors'

const MobileQuizView = ({
  quizType,
  isQuizOut,
  setQuizType,
  setIsQuizOut,
  setIsSelectOut,
  questions,
  isSelectOut,
  currentQuestion,
  shuffledAnswers,
  currentResult,
  setMoreInfoOption,
  answerType,
  results,
  handleQuestionClick,
  moreInfoOption,
  ...restProps
}: IQuizViewProps) => {
  return (
    <MobileMainContainer>
      <TitleLogo isMobileOnly />
      <AnimatePresence
        onExitComplete={() => {
          setIsQuizOut(false)
          setIsSelectOut(true)
        }}
      >
        {!quizType && isQuizOut && (
          <ContentContainer
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0, transition: { delay: durations.md } }}
            exit={{ opacity: 0, y: 40 }}
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
            initial={{ opacity: 0, y: -40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: durations.md },
            }}
            exit={{ opacity: 0, y: 40 }}
            transition={cardSpring}
          >
            <TopTextContainer>
              <QuizResults results={results} />
              <QuizFeedback
                quizType={quizType}
                currentQuestion={currentQuestion}
                shuffledAnswers={shuffledAnswers}
                currentResult={currentResult}
                setMoreInfoOption={setMoreInfoOption}
                answerType={answerType}
                {...restProps}
              />
              <MainText>{currentQuestion[quizType]}</MainText>
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
            </TopTextContainer>
            <div style={{ height: 32 }} />
          </ContentContainer>
        )}
      </AnimatePresence>
    </MobileMainContainer>
  )
}

const ContentContainer = styled(motion.div)`
  padding-top: 16px;
  width: 100%;
  height: 100%;
  max-height: 100%;
  min-height: 100%;

  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-row-gap: 12px;

  overflow-y: auto;
`

export default MobileQuizView
