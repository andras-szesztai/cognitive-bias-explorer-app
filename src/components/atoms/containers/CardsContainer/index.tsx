import styled from '@emotion/styled'
import { breakPoints } from '../../../../styles'

const CardsContainer = styled.div`
  height: 100%;
  max-height: 100%;
  min-height: 100%;

  position: relative;

  padding-bottom: 36px;

  display: grid;
  grid-template-columns: 5fr 3fr;
  grid-column-gap: 36px;

  @media (max-width: ${breakPoints.second}) {
    grid-template-columns: 6fr 5fr;
    grid-column-gap: 24px;
  }

  @media (max-width: ${breakPoints.third}) {
    grid-template-columns: min-content 1fr;
    grid-column-gap: 16px;
  }
`

export default CardsContainer
