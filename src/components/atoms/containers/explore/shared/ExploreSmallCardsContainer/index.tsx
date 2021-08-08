import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { breakPoints, colors } from '../../../../../../styles'

const SmallCardsContainer = styled.div<{ justifyStart: boolean }>`
  position: relative;

  place-self: stretch;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, min-content);
  ${({ justifyStart }) =>
    justifyStart
      ? css`
          justify-content: start;
          grid-column-gap: 16px;
        `
      : css`
          justify-content: space-between;
        `}
  grid-row-gap: 16px;
  align-content: start;

  overflow-y: scroll;
  padding-right: 12px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.darkGray};
    border-radius: 8px;
  }

  @media (max-width: ${breakPoints.second}) {
    grid-template-columns: repeat(2, min-content);
  }

  @media (max-width: ${breakPoints.third}) {
    grid-template-columns: min-content;
  }

  @media (max-width: ${breakPoints.fifth}) {
    grid-template-columns: repeat(2, min-content);
    justify-content: start;
    grid-row-gap: 8px;
    grid-column-gap: 8px;
    margin-bottom: 24px;

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${colors.darkGray};
      border-radius: 4px;
    }
  }

  @media (max-width: ${breakPoints.sixth}) {
    grid-template-columns: min-content;
    grid-column-gap: 0px;
  }
`

export default SmallCardsContainer
