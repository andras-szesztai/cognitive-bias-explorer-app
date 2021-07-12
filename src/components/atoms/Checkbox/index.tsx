import { motion } from 'framer-motion'
import styled from '@emotion/styled'

import {
  colors,
  fontSizesString,
  fontWeights,
  durations,
} from '../../../styles'

interface Props {
  label: string
  checked: boolean
  onClick: () => void
}

const Checkbox = ({ label, checked, onClick }: Props) => {
  const fillScale = checked ? 1 : 0

  return (
    <Container onClick={onClick}>
      <StyledCheckbox>
        <StyledCheckboxFill
          initial={{ scale: fillScale }}
          animate={{ scale: fillScale }}
          transition={{ duration: durations.sm }}
        />
      </StyledCheckbox>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
    </Container>
  )
}

export default Checkbox

const Container = styled(motion.button)`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 8px;
  cursor: pointer;
  position: relative;
  padding: 0px;
  border-radius: 4px;
  background-color: #fff;
  border: none;
  padding: 4px;
  text-align: left;

  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`

const StyledCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid ${colors.darkGray};
  border-radius: 2px;
  cursor: pointer;
  position: relative;
`

const StyledCheckboxFill = styled(motion.span)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${colors.darkGray};
`

const StyledLabel = styled.label`
  color: ${colors.darkGray};
  font-weight: ${fontWeights.default};
  font-size: ${fontSizesString.default};
  line-height: 1.4;
  cursor: pointer;
`
