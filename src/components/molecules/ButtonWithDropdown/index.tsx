import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styled from '@emotion/styled'
import { useDetectClickOutside } from 'react-detect-click-outside'

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
  DropdownContainer,
  ListContainer,
} from './styles'
import colors, {
  categoryColors,
  categoryLightColors,
} from '../../../styles/colors'
import { getOpacityInOut } from '../../../styles/animations'

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
  const ref = useDetectClickOutside({
    onTriggered: () => setIsSecondaryClicked(false),
  })

  const color = categoryColors[category]
  const lightColor = categoryLightColors[category]
  const mainButtonColor = mainButtonStatus === 'full' ? color : '#FFF'
  return (
    <DisplayContainer>
      <Container color={color} ref={ref}>
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
        <AnimatePresence>
          {isSecondaryClicked && (
            <DropdownContainer {...getOpacityInOut()}>
              <ListContainer>
                {selectedSubCategories.map((category) => (
                  <div>{category}</div>
                ))}
              </ListContainer>
            </DropdownContainer>
          )}
        </AnimatePresence>
      </Container>
    </DisplayContainer>
  )
}

export default ButtonWithDropdown
