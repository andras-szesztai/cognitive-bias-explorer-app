import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { isBoolean, isString } from 'lodash'

import {
  breakPoints,
  colors,
  cardSpring,
  fontSizesString,
} from '../../../styles'

interface IProps {
  gridArea: string
  color: string
  colorDark: string
  x: number
  y: number
  delay: number
  isFirstRender: boolean
  onFirstRender: (() => void) | boolean
  title: string
  paragraph: (() => React.ReactNode) | string
}

const HomeBigCard = ({
  gridArea,
  color,
  colorDark,
  x,
  y,
  delay,
  isFirstRender,
  onFirstRender,
  title,
  paragraph,
}: IProps) => {
  return (
    <Container
      gridArea={gridArea}
      color={color}
      initial={{
        x: isFirstRender ? x : 0,
        y: isFirstRender ? y : 0,
        opacity: isFirstRender ? 0 : 1,
      }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ ...cardSpring, delay }}
      onAnimationComplete={() => !isBoolean(onFirstRender) && onFirstRender()}
    >
      <TitleContainer colorDark={colorDark}>
        <Title>{title}</Title>
      </TitleContainer>
      {/* <Paragraph>{isString(paragraph) ? paragraph : paragraph()}</Paragraph> */}
    </Container>
  )
}

const Container = styled(motion.div)<Pick<IProps, 'gridArea' | 'color'>>`
  ${({ gridArea, color }) => css`
    background: ${color};
    grid-area: ${gridArea};
  `}

  position: relative;
  border-radius: 4px;
  padding: 24px;
  border: 1px solid ${colors.darkGray};

  display: grid;
  grid-template-rows: min-content 1fr;
  grid-row-gap: 8px;

  color: ${colors.darkGray};

  /* @media (max-width: ${breakPoints.fifth}) {
    padding: 8px 8px 12px 8px;
  } */
`

const TitleContainer = styled.div<Pick<IProps, 'colorDark'>>`
  border: 1px solid ${colors.darkGray};
  padding: 4px 8px;
  border-radius: 4px;
  background: ${({ colorDark }) => colorDark};
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

export const Paragraph = styled.p<{ color?: string }>`
  font-size: ${fontSizesString.default};
  padding: 0px 8px;
  line-height: 1.7;
  overflow-y: auto;

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

export default HomeBigCard
