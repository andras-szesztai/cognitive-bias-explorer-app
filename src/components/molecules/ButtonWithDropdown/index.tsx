import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { useState } from 'react'

import { ChevronIcon, DisplayContainer } from '../../atoms'

import { TCategories } from '../../../types/data'

import colors, {
  categoryColors,
  categoryLightColors,
} from '../../../styles/colors'
import { fontWeights } from '../../../styles'
interface Props {
  category: TCategories
  onClick: () => void
}

const ButtonWithDropdown = ({ category, onClick }: Props) => {
  const handleClick = () => {
    onClick()
  }

  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false)
  const [isSecondaryClicked, setIsSecondaryClicked] = useState(false)

  const color = categoryColors[category]
  const lightColor = categoryLightColors[category]
  return (
    <DisplayContainer>
      <Container color={color}>
        <MainButton onClick={handleClick}>{category}</MainButton>
        <Divider />
        <DropdownButton
          onMouseEnter={() => setIsSecondaryHovered(true)}
          onMouseLeave={() => setIsSecondaryHovered(false)}
          onClick={() => setIsSecondaryClicked((prev) => !prev)}
        >
          <ArrowMainContainer
            animate={{
              backgroundColor: isSecondaryHovered ? lightColor : color,
            }}
          >
            <ArrowSubContainer
              animate={{ rotate: isSecondaryClicked ? 180 : 0 }}
            >
              <ChevronIcon />
            </ArrowSubContainer>
          </ArrowMainContainer>
        </DropdownButton>
      </Container>
    </DisplayContainer>
  )
}

const Container = styled.div<{ color: string }>`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 0;

  border-radius: 4px;

  box-sizing: content-box;

  background: ${({ color }) => color};
  border: 1px solid ${colors.darkGray};
  overflow: hidden;
`

const Divider = styled.span`
  width: 1px;
  height: 100%;
  background: ${colors.darkGray};
`

const MainButton = styled.button`
  place-self: stretch;
  padding: 8px 16px;

  font-weight: ${fontWeights.bold};

  cursor: pointer;
  border: none;
  background: none;
`

const DropdownButton = styled.button`
  place-self: stretch;

  cursor: pointer;
  border: none;
  background: none;

  display: grid;
  place-items: center;

  padding: 0;

  position: relative;

  overflow: hidden;
`

const ArrowMainContainer = styled(motion.div)`
  padding: 8px;
  place-self: stretch;
  display: grid;
  place-items: center;
`

const ArrowSubContainer = styled(motion.span)``

export default ButtonWithDropdown
