import styled from '@emotion/styled'

import { breakPoints } from '../../../../../../styles'

const topMargin = 64
const topMarginMd = 36

const MainContainer = styled.div`
  position: relative;
  width: 1240px;
  height: calc(100% - ${topMargin}px);
  max-height: calc(100% - ${topMargin}px);
  min-height: calc(100% - ${topMargin}px);
  margin-top: ${topMargin}px;

  @media (max-width: ${breakPoints.first}) {
    width: 1040px;
  }

  @media (max-width: ${breakPoints.second}) {
    width: 800px;
    grid-row-gap: ${topMarginMd}px;
    margin-top: ${topMarginMd}px;
  }

  @media (max-width: ${breakPoints.third}) {
    width: 640px;
  }

  @media (max-width: ${breakPoints.fourth}) {
    width: 560px;
  }

  display: grid;
  grid-template-rows: 1fr;
`

export default MainContainer
