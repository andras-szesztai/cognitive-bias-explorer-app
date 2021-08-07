import styled from '@emotion/styled'
import { breakPoints } from '../../../../styles'

const CardsContainer = styled.div<{
  isMobileOnly?: boolean
  isSafari?: boolean
}>`
  height: ${({ isSafari }) => (isSafari ? '600px' : '100%')};
  max-height: ${({ isSafari }) => (isSafari ? 'auto' : '100%')};
  min-height: ${({ isSafari }) => (isSafari ? 'auto' : '100%')};

  position: relative;

  padding-bottom: 36px;

  display: grid;
  grid-template-columns: 3fr 5fr;
  grid-column-gap: 36px;

  @media (max-width: ${breakPoints.second}) {
    position: relative;
    grid-template-columns: 5fr 6fr;
    grid-column-gap: 24px;
  }

  @media (max-width: ${breakPoints.third}) {
    grid-template-columns: ${({ isMobileOnly }) =>
      isMobileOnly ? '5fr 6fr' : '1fr min-content'};
    grid-column-gap: 16px;
  }

  @media (max-width: ${breakPoints.fifth}) {
    grid-template-columns: 1fr;
    grid-column-gap: 0px;
    grid-template-rows: min-content 1fr;
    grid-row-gap: 12px;
    padding-bottom: 0px;
  }
`

export default CardsContainer
