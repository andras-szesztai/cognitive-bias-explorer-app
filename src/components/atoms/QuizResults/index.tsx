import styled from '@emotion/styled'
import { isUndefined } from 'lodash'

import { breakPoints, fontSizesString } from '../../../styles'
import { IQuizResult } from '../../../types/quiz'
import { CorrectMark, IncorrectMark, QuestionMark } from '../icons'

const QuizResults = ({ results }: { results: (IQuizResult | undefined)[] }) => {
  return (
    <ResultsContainer>
      {results.map((result, i) => (
        <Result key={i}>
          {i + 1}.
          {isUndefined(result) ? (
            <QuestionMark height={14} />
          ) : result.result ? (
            <CorrectMark fill={result.color} height={14} />
          ) : (
            <IncorrectMark fill={result.color} height={14} />
          )}
        </Result>
      ))}
    </ResultsContainer>
  )
}

const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 24px);
  grid-column-gap: 36px;
  align-items: center;
  margin-bottom: 8px;
  font-size: ${fontSizesString.default};

  @media (max-width: ${breakPoints.second}) {
    grid-column-gap: 24px;
  }

  @media (max-width: ${breakPoints.third}) {
    grid-column-gap: 16px;
  }

  @media (max-width: ${breakPoints.fifth}) {
    font-size: ${fontSizesString.sm};
    grid-template-columns: repeat(5, 24px);
    grid-template-rows: repeat(2, 24px);
    grid-row-gap: 8px;
    margin-bottom: 0px;
  }
`

const Result = styled.div`
  display: grid;
  align-content: center;
  align-items: center;
  grid-auto-flow: column;
  grid-column-gap: 8px;

  @media (max-width: ${breakPoints.second}) {
    grid-column-gap: 4px;
  }
`

export default QuizResults
