import styled from '@emotion/styled'
import { breakPoints } from '../../../../styles'

const CardsContainer = styled.div`
  height: 100%;
  max-height: 100%;
  min-height: 100%;

  position: relative;

  padding-bottom: 36px;

  display: grid;
  grid-template-columns: 3fr 5fr;
  grid-column-gap: 36px;

  @media (max-width: ${breakPoints.second}) {
    grid-template-columns: 5fr 6fr;
    grid-column-gap: 24px;
  }

  @media (max-width: ${breakPoints.third}) {
    grid-template-columns: 1fr min-content;
    grid-column-gap: 16px;
  }

  @media (max-width: ${breakPoints.fifth}) {
    grid-template-columns: 1fr;
    grid-column-gap: 0px;
    grid-template-rows: 220px 1fr;
    grid-row-gap: 16px;
    padding-bottom: 0px;
  }
`

export default CardsContainer
