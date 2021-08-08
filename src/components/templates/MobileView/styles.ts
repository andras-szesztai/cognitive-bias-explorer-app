import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { colors } from '../../../styles'

export const MainButtonsContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr min-content;
  grid-column-gap: 8px;
`

export const ClearButton = styled(motion.button)`
  background: ${colors.darkGray};
  padding: 4px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  display: grid;
  place-content: center;

  line-height: 1;
  color: ${colors.white};

  margin-bottom: 16px;
`
