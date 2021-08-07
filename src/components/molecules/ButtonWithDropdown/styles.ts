import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import colors from '../../../styles/colors'
import { fontSizesString, fontWeights, zIndexes } from '../../../styles'

const space = 8
const colorLegendWidth = 36

export const Container = styled.div<{ color: string; zIndexAdjust: number }>`
  position: relative;
  display: grid;
  place-self: stretch;
  height: 100%;
  grid-auto-flow: column;
  grid-column-gap: 0;

  border-radius: 4px;

  box-sizing: content-box;

  border: 1px solid ${colors.darkGray};
  background-color: ${({ color }) => color};
  z-index: ${({ zIndexAdjust }) => zIndexes.buttonsWithDropdown - zIndexAdjust};
`

export const Divider = styled.span`
  width: 1px;
  height: 100%;
  background: ${colors.darkGray};
`

export const MainButton = styled(motion.button)<{
  color: string
  width: number
}>`
  padding: 8px 16px;
  border-radius: 3px 0 0 3px;
  white-space: nowrap;
  margin: 0;

  width: ${({ width }) => (width ? width - colorLegendWidth - 3 : 250)}px;
  text-align: left;

  font-weight: ${fontWeights.bold};
  font-size: ${fontSizesString.default};
  line-height: 1;

  cursor: pointer;
  border: none;
  position: relative;
  overflow: hidden;

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

export const DropdownContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  max-height: 180px;
  border: 1px solid ${colors.darkGray};
  padding: ${space / 2}px;
  border-radius: 4px;
  background: #fff;

  top: calc(100% + 4px);

  overflow-y: scroll;
`

export const ListContainer = styled.div`
  position: relative;
  display: grid;
  row-gap: ${space}px;
`

export const MobileColorLegend = styled.div`
  width: ${colorLegendWidth}px;
`
