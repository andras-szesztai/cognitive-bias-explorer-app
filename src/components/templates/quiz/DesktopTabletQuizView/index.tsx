import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { DesktopMainContainer } from '../../../atoms'

import { getRandomQuestionAnswers } from '../../../../utils/dataHelpers'

import { QuestionTypes } from '../../../../types/quiz'

import { paddings } from '../../../../constants/dimensions'

import {
  breakPoints,
  cardSpring,
  colors,
  fontSizesString,
  fontWeights,
} from '../../../../styles'
import { QuizCard } from '../../../atoms'
import { quizTypes } from '../../../../constants/quiz'

interface IQuizProps {
  quizType: QuestionTypes | undefined
  setQuizType: (type: QuestionTypes) => void
}

const DesktopTabletQuizView = ({ quizType, setQuizType }: IQuizProps) => {
  const [isSelectOut, setIsSelectOut] = useState(false)

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
                  text={text}
                  handleClick={() => setQuizType(type)}
                  isActive={false}
                  color={colors.darkGray}
                  colorLight={colors.darkGrayOpaque}
                />
              ))}
            </SmallCardsContainer>
          </ContentContainer>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!!quizType && isSelectOut && (
          <ContentContainer
            initial={{ opacity: 0, y: -400 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 400 }}
            transition={cardSpring}
          >
            Question
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
  grid-column-gap: 24px;
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 24px;
`

export default DesktopTabletQuizView
