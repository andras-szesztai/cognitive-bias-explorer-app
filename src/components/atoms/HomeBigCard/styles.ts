import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { IProps } from '.'

import { paddings } from '../../../constants/dimensions'

import {
  breakPoints,
  colors,
  fontSizesString,
  fontWeights,
} from '../../../styles'

export const GridContainer = styled(motion.div)<
  Pick<IProps, 'gridArea' | 'alignContent'>
>`
  display: grid;
  position: relative;
  ${({ gridArea, alignContent }) => css`
    grid-area: ${gridArea};
    align-content: ${alignContent};
  `}
`

export const CardContainer = styled.div<
  Pick<IProps, 'colorLight'> & { withSubtitle: boolean }
>`
  ${({ colorLight }) => css`
    background: ${colorLight};
  `}

  border-radius: 4px;
  padding: ${paddings.cardPadding}px;
  border: 1px solid ${colors.darkGray};

  display: grid;
  grid-template-rows: repeat(
    ${({ withSubtitle }) => (withSubtitle ? 3 : 2)},
    min-content
  );
  grid-row-gap: 8px;

  color: ${colors.darkGray};
`

export const TitleContainer = styled.div<Pick<IProps, 'color'>>`
  border: 1px solid ${colors.darkGray};
  padding: 4px 8px;
  border-radius: 4px;
  background: ${({ color }) => color};
`

export const Title = styled.h2`
  font-size: ${fontSizesString.md};
  line-height: 1.3;
  user-select: none;

  @media (max-width: ${breakPoints.third}) {
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

export const ParagraphContainer = styled.div<{
  maxHeight: number
  noMaxHeight?: boolean
}>`
  place-self: start;
  ${({ noMaxHeight, maxHeight }) =>
    !noMaxHeight &&
    css`
      max-height: ${maxHeight || 0}px;
    `}

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ color }) => color || colors.darkGray};
    border-radius: 8px;
  }

  @media (max-width: ${breakPoints.fifth}) {
    ::-webkit-scrollbar-thumb {
      background: ${colors.darkGray};
      border-radius: 4px;
    }
  }
`

export const Paragraph = styled.p<{ color?: string }>`
  font-size: ${fontSizesString.default};
  padding: 0px 8px;
  line-height: 1.6;
  overflow-y: auto;

  a {
    color: ${colors.darkGray};

    :visited {
      color: ${colors.darkGray};
    }
  }

  @media (max-width: ${breakPoints.second}) {
    line-height: 1.5;
  }

  @media (max-width: ${breakPoints.fifth}) {
    line-height: 1.4;
    padding: 0px 4px;
    max-height: 100%;
    font-size: ${fontSizesString.sm};
  }
`
