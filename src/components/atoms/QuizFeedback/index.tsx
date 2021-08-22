import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import { isUndefined } from 'lodash'

import { ChevronIcon } from '../icons'

import { QuestionTypes } from '../../../types/quiz'
import { IQuizViewProps } from '../../templates/quiz/DesktopTabletQuizView'

import { alphabet } from '../../../constants/quiz'

import { breakPoints, colors, getOpacityInOut } from '../../../styles'

type IProps = Pick<
  Required<IQuizViewProps>,
  | 'currentResult'
  | 'quizType'
  | 'shuffledAnswers'
  | 'currentQuestion'
  | 'answerType'
  | 'isLast'
  | 'setCurrentQuestionIndex'
  | 'setMoreInfoOption'
  | 'handleReset'
>

const QuizFeedback = ({
  currentResult,
  quizType,
  shuffledAnswers,
  answerType,
  currentQuestion,
  isLast,
  setCurrentQuestionIndex,
  setMoreInfoOption,
  handleReset,
}: IProps) => {
  return (
    <FeedbackContainer>
      {isUndefined(currentResult) ? (
        <p>
          Please select an answer for the following{' '}
          {quizType === QuestionTypes.bias ? 'cognitive bias' : 'definition'}:
        </p>
      ) : currentResult.result ? (
        <p>Correct!</p>
      ) : (
        <p>
          Incorrect! The correct answer was{' '}
          {
            alphabet[
              shuffledAnswers!.findIndex(
                (a) => a[answerType] === currentQuestion![answerType]
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
                setMoreInfoOption(undefined)
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
  )
}

const FeedbackContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakPoints.fifth}) {
    grid-template-columns: 180px max-content;
    align-items: start;
  }
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

export default QuizFeedback
