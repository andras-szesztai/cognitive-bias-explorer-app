import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { heights } from '../../../constants/dimensions'

import { breakPoints, colors } from '../../../styles'

export const NavbarContainer = styled.div`
  user-select: none;
  width: 100vw;
  height: ${heights.navbar}px;
  position: relative;

  display: flex;
  justify-content: center;
`

export const Navbar = styled.nav`
  width: 100%;
  max-width: 1770px;
  min-width: 600px;
  height: ${heights.navbar}px;

  padding: 0 80px;

  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-auto-flow: column;

  @media (max-width: ${breakPoints.second}) {
    padding: 0 64px;
  }

  @media (max-width: ${breakPoints.third}) {
    padding: 0 48px;
  }

  @media (max-width: ${breakPoints.fourth}) {
    padding: 0 24px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 64px;

  @media (max-width: ${breakPoints.second}) {
    grid-column-gap: 64px;
  }

  @media (max-width: ${breakPoints.third}) {
    grid-column-gap: 48px;
  }

  @media (max-width: ${breakPoints.fourth}) {
    grid-column-gap: 24px;
  }
`

export const ListItem = styled.li`
  list-style-type: none;
  cursor: pointer;
`

export const StyledLink = styled(Link)`
  color: ${colors.darkGray};
  position: relative;
  text-decoration: none;
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
  width: 30px;
  background-color: ${({ color }) => color};
  border: 1px solid ${colors.darkGray};
`
