import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { DesktopMainContainer } from '../../../atoms'

import { getRandomQuestionAnswers } from '../../../../utils/dataHelpers'

import {
  breakPoints,
  cardSpring,
  colors,
  fontSizesString,
  fontWeights,
} from '../../../../styles'
import { paddings } from '../../../../constants/dimensions'

interface IOptions {
  correct: string
  question: string
  answers: string[]
}

const DesktopTabletQuizView = () => {
  const [options, setOptions] = useState<IOptions>({
    correct: '',
    question: '',
    answers: [] as string[],
  })
  useEffect(() => {
    if (!options.correct) {
      setOptions(getRandomQuestionAnswers())
    }
  }, [options])
  const [selectedAnswer, setSelectedAnswer] = useState('')

  return (
    <DesktopMainContainer>
      <DesktopQuizContentContainer>
        <AnimatePresence>
          {!!selectedAnswer && (
            <Modal
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={cardSpring}
              whileHover={{
                backgroundColor: colors.darkGrayOpaque,
              }}
              onClick={() => {
                setOptions(getRandomQuestionAnswers())
                setSelectedAnswer('')
              }}
            >
              {selectedAnswer === options.correct
                ? 'Correct!'
                : `Incorrect, the correct answer is ${options.correct}.`}{' '}
              Next question?
            </Modal>
          )}
        </AnimatePresence>
        <QuestionContainer>
          <ExplainText>Definition:</ExplainText>
          <div>{options.question}</div>
          <ExplainText>
            Which bias do you think does this definition belong to?
          </ExplainText>
        </QuestionContainer>
        {options.answers.map((answer, i) => (
          <AnswerContainer
            key={answer}
            cursor={!selectedAnswer ? 'pointer' : 'default'}
            whileHover={{
              backgroundColor: colors.darkGrayOpaque,
            }}
            onClick={() => !selectedAnswer && setSelectedAnswer(answer)}
            area={i + 1}
          >
            {answer}
          </AnswerContainer>
        ))}
      </DesktopQuizContentContainer>
    </DesktopMainContainer>
  )
}

export const DesktopQuizContentContainer = styled.div`
  place-self: start stretch;
  justify-content: start;
  position: relative;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 64px;
  grid-template-rows: min-content repeat(2, 1fr);
  grid-row-gap: 36px;
  grid-template-areas:
    'q q'
    'a1 a2'
    'a3 a4';

  @media (max-width: ${breakPoints.fourth}) {
    grid-template-columns: 1fr;
    grid-column-gap: 0px;

    grid-template-areas:
      'q'
      'a1'
      'a2'
      'a3'
      'a4';
  }
`

export const QuestionContainer = styled.div`
  place-self: stretch;
  grid-area: q;

  font-size: ${fontSizesString.lg};
  font-weight: ${fontWeights.bold};

  display: grid;
  grid-row-gap: 8px;
  max-height: 600px;
  overflow-y: auto;
`

export const ExplainText = styled.h2`
  font-size: ${fontSizesString.default};
  font-weight: ${fontWeights.default};
  line-height: 1.6;
`

// TODO: make it button
export const AnswerContainer = styled(motion.div)<{
  area: number
  cursor: string
}>`
  place-self: stretch;
  grid-area: ${({ area }) => `a${area}`};

  padding: ${paddings.cardPadding}px;
  border: 1px solid ${colors.darkGray};
  border-radius: 4px;

  cursor: ${({ cursor }) => cursor};
  font-size: ${fontSizesString.default};
  font-weight: ${fontWeights.bold};
`

export const Modal = styled(motion.div)`
  position: absolute;
  bottom: -120px;
  left: 0%;

  border: 1px solid ${colors.darkGray};
  color: ${colors.darkGray};
  border-radius: 4px;
  padding: ${paddings.cardPadding}px;

  font-size: ${fontSizesString.default};
  font-weight: ${fontWeights.bold};

  user-select: none;

  cursor: pointer;
`

export default DesktopTabletQuizView
