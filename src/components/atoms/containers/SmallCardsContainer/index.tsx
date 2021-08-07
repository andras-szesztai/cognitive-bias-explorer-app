import styled from '@emotion/styled'
import { breakPoints } from '../../../../styles'

const SmallCardsContainer = styled.div`
  position: relative;

  place-self: stretch;
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
    padding-right: 0px;
  }
`

export default SmallCardsContainer
