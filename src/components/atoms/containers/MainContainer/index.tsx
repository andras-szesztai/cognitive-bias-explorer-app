import styled from '@emotion/styled'

import { breakPoints } from '../../../../styles'

const topMargin = 64
const topMarginMd = 36
const topMarginSm = 24

const MainContainer = styled.div`
  width: 1240px;
  height: calc(100% - ${topMargin}px);
  max-height: calc(100% - ${topMargin}px);
  min-height: calc(100% - ${topMargin}px);
  margin-top: ${topMargin}px;
  grid-row-gap: ${topMargin}px;

  @media (max-width: ${breakPoints.first}) {
    width: 1040px;
  }

  @media (max-width: ${breakPoints.second}) {
    width: 800px;
    grid-row-gap: ${topMarginMd}px;
    margin-top: ${topMarginMd}px;
  }

  display: grid;
  grid-template-rows: min-content 1fr;
`

export default MainContainer
