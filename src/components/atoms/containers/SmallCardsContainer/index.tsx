import styled from '@emotion/styled'
import { breakPoints } from '../../../../styles'

const SmallCardsContainer = styled.div`
  position: relative;

  place-self: stretch;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, min-content);
  justify-content: space-between;
  grid-row-gap: 16px;
  align-content: start;

  overflow-y: scroll;
  padding-right: 12px;

  @media (max-width: ${breakPoints.second}) {
    grid-template-columns: repeat(2, min-content);
  }

  @media (max-width: ${breakPoints.third}) {
    grid-template-columns: min-content;
  }

  @media (max-width: ${breakPoints.fifth}) {
    grid-template-columns: repeat(2, min-content);
    grid-row-gap: 8px;
  }
`

export default SmallCardsContainer
