import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import colors from '../../../styles/colors'
import { fontSizesString, fontWeights } from '../../../styles'

const dropdownOffset = 80
const space = 8

export const Container = styled.div<{ color: string }>`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 0;

  border-radius: 4px;

  box-sizing: content-box;

  border: 1px solid ${colors.darkGray};
  background-color: ${({ color }) => color};
`

export const Divider = styled.span`
  width: 1px;
  height: 100%;
  background: ${colors.darkGray};
`

export const MainButtonContainer = styled.div`
  place-self: stretch;
  overflow: hidden;
  border-radius: 4px;
`

export const MainButton = styled(motion.button)`
  place-self: stretch;
  padding: 8px 16px;
  border-radius: 3px 0 0 3px;

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
  border-radius: 0 3px 3px 0;
`

export const ArrowSubContainer = styled(motion.span)``

export const DropdownContainer = styled(motion.div)`
  position: absolute;
  width: calc(100% + ${dropdownOffset}px - ${2 * space}px);
  max-height: 180px;
  border: 1px solid ${colors.darkGray};
  padding: ${space}px;
  border-radius: 4px;
  background: #fff;

  top: calc(100% + 4px);
  left: -${dropdownOffset}px;

  overflow-y: scroll;
`

export const ListContainer = styled.div`
  position: relative;
  display: grid;
  row-gap: ${space}px;
`
