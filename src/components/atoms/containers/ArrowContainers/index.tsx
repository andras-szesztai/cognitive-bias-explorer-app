import styled from '@emotion/styled'
import { motion } from 'framer-motion'

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
  width: 14px;
`
