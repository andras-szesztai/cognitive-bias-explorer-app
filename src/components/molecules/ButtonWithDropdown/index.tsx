import { useState } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

import { ChevronIcon, DisplayContainer } from '../../atoms'

import { useMainButtonStatus } from './hooks'

import { TCategories } from '../../../types/data'

import {
  Container,
  Divider,
  MainButton,
  DropdownButton,
  ArrowMainContainer,
  ArrowSubContainer,
} from './styles'
import colors, {
  categoryColors,
  categoryLightColors,
} from '../../../styles/colors'

export interface Props {
  category: TCategories
  selectedSubCategories: string[]
  allSubCategoriesLength: number
  onMainClick: () => void
}

const ButtonWithDropdown = ({
  category,
  selectedSubCategories,
  allSubCategoriesLength,
  onMainClick,
}: Props) => {
  const mainButtonStatus = useMainButtonStatus({
    selectedSubCategories,
    allSubCategoriesLength,
  })
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false)
  const [isSecondaryClicked, setIsSecondaryClicked] = useState(false)

  const color = categoryColors[category]
  const lightColor = categoryLightColors[category]
  const mainButtonColor = mainButtonStatus === 'full' ? color : '#FFF'
  return (
    <DisplayContainer>
      <Container>
        <MainButton
          initial={{ background: mainButtonColor }}
          animate={{ background: mainButtonColor }}
          onClick={onMainClick}
        >
          {category}
        </MainButton>
        <Divider />
        <DropdownButton
          onMouseEnter={() => setIsSecondaryHovered(true)}
          onMouseLeave={() => setIsSecondaryHovered(false)}
          onClick={() => setIsSecondaryClicked((prev) => !prev)}
        >
          <ArrowMainContainer
            animate={{
              background: isSecondaryHovered ? lightColor : color,
            }}
          >
            <ArrowSubContainer
              animate={{ rotate: isSecondaryClicked ? 180 : 0 }}
            >
              <ChevronIcon />
            </ArrowSubContainer>
          </ArrowMainContainer>
        </DropdownButton>
        <DropdownContainer></DropdownContainer>
      </Container>
    </DisplayContainer>
  )
}

const DropdownContainer = styled(motion.div)`
  position: absolute;
  border: 1px solid ${colors.darkGray};
`

export default ButtonWithDropdown
