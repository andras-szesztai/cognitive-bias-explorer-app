import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { colors, fontSizesString, fontWeights } from '../../../styles'

export const MainContainer = styled(motion.div)`
  position: relative;

  place-self: start;
  border: 1px solid ${colors.darkGray};
  border-radius: 8px;
  padding: 36px;
  padding-bottom: 64px;

  display: grid;
  grid-template-rows: repeat(2, min-content) 1fr;
  grid-row-gap: 8px;

  color: ${colors.darkGray};
`

export const Title = styled(motion.h2)<{ noBorder?: boolean }>`
  font-size: ${fontSizesString.lg};
  line-height: 1.3;
  padding: 4px 8px;
  border: 1px solid
    ${({ noBorder }) => (noBorder ? 'transparent' : colors.darkGray)};
  border-radius: 6px;
`

export const SubTitle = styled.h4`
  padding: 0px 8px;
  line-height: 1.6;
  font-style: italic;
  font-weight: ${fontWeights.default};
  font-size: ${fontSizesString.sm};
`

export const Paragraph = styled.p<{ color?: string }>`
  font-size: ${fontSizesString.default};
  padding: 0px 8px;
  line-height: 1.8;
  overflow-y: auto;
  max-height: 400px;

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
`

export const IconContainer = styled.div`
  position: absolute;
  right: 16px;
  bottom: 8px;
`
