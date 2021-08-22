import { isUndefined } from 'lodash'
import styled from '@emotion/styled'
import { usePrevious } from 'rooks'

import HomeBigCard from '../HomeBigCard'

import { IQuizViewProps } from '../../templates/quiz/DesktopTabletQuizView'

import { categoryColors, categoryLightColors } from '../../../styles/colors'
import { breakPoints, fontSizesString } from '../../../styles'

const QuizMoreInfoOption = ({
  currentResult,
  moreInfoOption,
}: Pick<IQuizViewProps, 'currentResult' | 'moreInfoOption'>) => {
  const prevMoreInfoOption = usePrevious(moreInfoOption)
  if (isUndefined(currentResult)) return null
  return !moreInfoOption ? (
    <Paragraph>Click around to find out more about the options!</Paragraph>
  ) : (
    <HomeBigCard
      colorLight={categoryLightColors[moreInfoOption.category]}
      color={categoryColors[moreInfoOption.category]}
      title={moreInfoOption.cognitiveBias}
      subtitle={moreInfoOption.subCategory}
      paragraph={moreInfoOption.definition}
      noMaxHeight
      isFirstRender={isUndefined(prevMoreInfoOption) && !!moreInfoOption}
    />
  )
}

const Paragraph = styled.p`
  line-height: 1.6;
  font-size: ${fontSizesString.default};

  @media (max-width: ${breakPoints.fifth}) {
    line-height: 1.4;
    font-size: ${fontSizesString.sm};
  }
`

export default QuizMoreInfoOption
