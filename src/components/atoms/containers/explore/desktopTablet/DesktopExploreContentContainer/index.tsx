import styled from '@emotion/styled'
import { breakPoints } from '../../../../../../styles'

const ExploreContentContainer = styled.div`
  height: 100%;
  max-height: 100%;
  min-height: 100%;

  display: grid;
  grid-row-gap: 36px;
  grid-template-rows: min-content 1fr;

  @media (max-width: ${breakPoints.second}) {
    grid-row-gap: 24px;
  }

  @media (max-width: ${breakPoints.fifth}) {
    grid-row-gap: 12px;
  }
`

export default ExploreContentContainer
