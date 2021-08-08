import styled from '@emotion/styled'

import { margins, widths } from '../../../../../constants/dimensions'
import { breakPoints } from '../../../../../styles'

const MainContainer = styled.div`
  position: relative;
  width: ${widths.maxContentXl}px;
  height: calc(100% - ${margins.topMainXl}px);
  max-height: calc(100% - ${margins.topMainXl}px);
  min-height: calc(100% - ${margins.topMainXl}px);
  margin-top: ${margins.topMainXl}px;

  @media (max-width: ${breakPoints.first}) {
    width: ${widths.maxContentMd}px;
  }

  @media (max-width: ${breakPoints.second}) {
    width: ${widths.maxContentSm}px;
    grid-row-gap: ${margins.topMainMd}px;
    margin-top: ${margins.topMainMd}px;
  }

  @media (max-width: ${breakPoints.third}) {
    width: ${widths.maxContentXs}px;
  }

  @media (max-width: ${breakPoints.fourth}) {
    width: ${widths.maxContentXxs}px;
  }

  display: grid;
`

export default MainContainer
