import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { heights } from '../../../constants/dimensions'

import { colors } from '../../../styles'

export const Navbar = styled.nav`
  width: 100vw;
  height: ${heights.navbar}px;
  border-bottom: 1px solid ${colors.darkGray};
  padding: 0 80px;

  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-auto-flow: column;
`

export const List = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 64px;
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
  left: number
}>`
  position: absolute;
  ${({ top, left }) => css`
    left: ${left}px;
    top: ${top}px;
  `}

  height: 6px;
  border-radius: 4px;
  width: 30px;
  background-color: ${({ color }) => color};
  border: 1px solid ${colors.darkGray};
`
