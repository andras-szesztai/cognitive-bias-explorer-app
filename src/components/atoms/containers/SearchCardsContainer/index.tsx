import styled from '@emotion/styled'
import { breakPoints } from '../../../../styles'

const SearchCardsContainer = styled.div`
  height: 100%;
  max-height: 100%;
  min-height: 100%;

  display: grid;
  grid-row-gap: 24px;
  grid-template-rows: min-content 1fr;

  @media (max-width: ${breakPoints.second}) {
    grid-row-gap: 16px;
  }
`

export default SearchCardsContainer
