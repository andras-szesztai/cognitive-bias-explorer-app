import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import colors from '../../../styles/colors'
import { fontSizesString, fontWeights, zIndexes } from '../../../styles'

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
  z-index: ${zIndexes.buttonsWithDropdown};
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

export const MainButton = styled(motion.button)<{ color: string }>`
  place-self: stretch;
  padding: 8px 16px;
  border-radius: 3px 0 0 3px;

  font-weight: ${fontWeights.bold};
  font-size: ${fontSizesString.default};
  line-height: 1;

  cursor: pointer;
  border: none;
  position: relative;

  :focus-visible {
    outline: none;
    :before {
      top: -16px;
      left: 50%;
      border: solid transparent;
      content: '';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(136, 183, 213, 0);
      border-top-color: ${({ color }) => color};
      border-width: 8px;
      margin-left: -8px;
    }
  }
`

export const DropdownButton = styled.button<{ color: string }>`
  place-self: stretch;

  cursor: pointer;
  border: none;
  background: none;

  display: grid;
  place-items: center;

  padding: 0;
  position: relative;

  :focus-visible {
    outline: none;
    :before {
      top: -16px;
      left: 50%;
      border: solid transparent;
      content: '';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(136, 183, 213, 0);
      border-top-color: ${({ color }) => color};
      border-width: 8px;
      margin-left: -8px;
    }
  }
`

export const ArrowMainContainer = styled(motion.div)`
  place-self: stretch;
  padding: 8px;
  display: grid;
  place-items: center;
  border-radius: 0 3px 3px 0;
  position: relative;
`

export const ArrowSubContainer = styled(motion.span)`
  height: 100%;
  display: grid;
  place-items: center;
`

export const DropdownContainer = styled(motion.div)`
  position: absolute;
  width: calc(100% + ${dropdownOffset}px);
  max-height: 180px;
  border: 1px solid ${colors.darkGray};
  padding: ${space / 2}px;
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
