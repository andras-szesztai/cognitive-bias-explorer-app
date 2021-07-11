import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import colors from '../../../styles/colors'
import { fontSizesString, fontWeights } from '../../../styles'

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 0;

  border-radius: 4px;

  box-sizing: content-box;

  border: 1px solid ${colors.darkGray};
  overflow: hidden;
`

export const Divider = styled.span`
  width: 1px;
  height: 100%;
  background: ${colors.darkGray};
`

export const MainButton = styled(motion.button)`
  place-self: stretch;
  padding: 8px 16px;

  font-weight: ${fontWeights.bold};
  font-size: ${fontSizesString.default};

  cursor: pointer;
  border: none;

  :focus {
    outline: none;
    /* //TODO set it up */
  }
`

export const DropdownButton = styled.button`
  place-self: stretch;

  cursor: pointer;
  border: none;
  background: none;

  display: grid;
  place-items: center;

  padding: 0;

  position: relative;

  :focus {
    outline: none;
    /* //TODO set it up */
  }
`

export const ArrowMainContainer = styled(motion.div)`
  padding: 8px;
  place-self: stretch;
  display: grid;
  place-items: center;
`

export const ArrowSubContainer = styled(motion.span)``
