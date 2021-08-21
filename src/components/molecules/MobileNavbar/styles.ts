import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { heights } from '../../../constants/dimensions'

import { colors } from '../../../styles'

export const NavbarContainer = styled.div`
  width: 100vw;
  height: ${heights.navbarMobile}px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${colors.white};

  border-top: 1px solid ${colors.darkGray};

  display: grid;
`

export const Navbar = styled.nav`
  place-self: stretch;
  display: grid;

  padding: 0 16px;
`
export const List = styled.ul`
  place-self: stretch;

  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-auto-flow: column;

  padding: 0;
  margin: 0;
`

export const Pill = styled(motion.span)<{
  color: string
  top: number
  left?: number
  right?: number
}>`
  position: absolute;
  ${({ top, left, right }) => css`
    left: ${left}px;
    top: ${top}px;
    right: ${right}px;
  `}

  height: 6px;
  border-radius: 4px;
  width: 24px;
  background-color: ${({ color }) => color};
  border: 1px solid ${colors.darkGray};
`
