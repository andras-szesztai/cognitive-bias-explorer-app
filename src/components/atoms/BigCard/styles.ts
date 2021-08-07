import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import {
  breakPoints,
  colors,
  fontSizesString,
  fontWeights,
} from '../../../styles'

export const MainContainer = styled(motion.div)<{
  maxExpandedCardHeight?: number
}>`
  position: relative;

  place-self: start;
  border: 1px solid ${colors.darkGray};
  border-radius: 4px;
  padding: 24px;
  padding-bottom: 64px;

  display: grid;
  grid-template-rows: repeat(2, min-content) 1fr;
  grid-row-gap: 8px;

  color: ${colors.darkGray};

  @media (max-width: ${breakPoints.fifth}) {
    padding: 8px 8px 12px 8px;
    height: ${({ maxExpandedCardHeight }) =>
      maxExpandedCardHeight ? 'auto' : '180px'};
    min-height: ${({ maxExpandedCardHeight }) =>
      maxExpandedCardHeight ? 276 : 180}px;
    max-height: ${({ maxExpandedCardHeight }) =>
      maxExpandedCardHeight ? maxExpandedCardHeight : 180}px;
  }
`
export const TitleContainer = styled(motion.div)<{ noBorder?: boolean }>`
  border: 1px solid
    ${({ noBorder }) => (noBorder ? 'transparent' : colors.darkGray)};
  padding: 4px 8px;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakPoints.fifth}) {
    padding: 2px 4px;
  }
`

export const ExpandIconContainer = styled.div`
  height: 20px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  font-size: ${fontSizesString.lg};
  line-height: 1.3;

  @media (max-width: ${breakPoints.fifth}) {
    font-size: ${fontSizesString.default};

    line-height: 1.2;
  }
`

export const SubTitle = styled.h4`
  padding: 0px 8px;
  line-height: 1.6;
  font-style: italic;
  font-weight: ${fontWeights.default};
  font-size: ${fontSizesString.sm};

  @media (max-width: ${breakPoints.fifth}) {
    line-height: 1.4;
    padding: 0px 4px;
    font-size: ${fontSizesString.xs};
  }
`

export const Paragraph = styled.p<{ color?: string }>`
  font-size: ${fontSizesString.default};
  padding: 0px 8px;
  line-height: 1.7;
  overflow-y: auto;
  max-height: 360px;

  @media (max-width: ${breakPoints.fifth}) {
    line-height: 1.4;
    padding: 0px 4px;
    font-size: ${fontSizesString.sm};
    max-height: 100%;
  }

  a {
    color: ${colors.blue};

    :visited {
      color: ${colors.blue};
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ color }) => color || colors.darkGray};
    border-radius: 8px;
  }

  @media (max-width: ${breakPoints.fifth}) {
    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${colors.darkGray};
      border-radius: 4px;
    }
  }
`

export const IconContainer = styled.div`
  position: absolute;
  right: 16px;
  bottom: 8px;
`

export const FixedBigCard = styled(motion.div)<{ maxHeight: number }>`
  position: fixed;
  top: 16px;
  left: 16px;
  width: calc(100vw - 32px);
  max-height: ${({ maxHeight }) => maxHeight}px;
`
