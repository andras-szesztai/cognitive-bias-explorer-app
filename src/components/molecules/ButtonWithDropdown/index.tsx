import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useDetectClickOutside } from 'react-detect-click-outside'

import { ChevronIcon, DisplayContainer, Checkbox } from '../../atoms'

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
import { categoryColors, categoryLightColors } from '../../../styles/colors'
import { getOpacityInOut } from '../../../styles/animations'

export interface Props {
  category: TCategories
  selectedSubCategories: string[]
  allSubCategories: string[]
  onMainClick: () => void
  onCheckboxClick: (subCategory: string) => void
}

const ButtonWithDropdown = ({
  category,
  selectedSubCategories,
  allSubCategories,
  onMainClick,
  onCheckboxClick,
}: Props) => {
  const mainButtonStatus = useMainButtonStatus({
    selectedSubCategories,
    allSubCategories,
  })
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false)
  const [isSecondaryClicked, setIsSecondaryClicked] = useState(false)
  const ref = useDetectClickOutside({
    onTriggered: () => setIsSecondaryClicked(false),
  })

  // TODO make it work on the main cards part
  // const [focusedOption, setFocusedOption] = useState(0)
  // useEventListener('keydown', (event: KeyboardEvent) => {
  //   if (isSecondaryClicked) {
  //     if (event.key === 'ArrowDown' || event.key === 's') {
  //       setFocusedOption((prev) =>
  //         prev < allSubCategories.length - 1 ? ++prev : prev
  //       )
  //     }
  //     if (event.key === 'ArrowUp' || event.key === 'w') {
  //       setFocusedOption((prev) => (prev > 0 ? --prev : prev))
  //     }
  //   }
  // })

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
          color={color}
        >
          {category}
        </MainButton>
        <Divider />
        <DropdownButton
          onMouseEnter={() => setIsSecondaryHovered(true)}
          onMouseLeave={() => setIsSecondaryHovered(false)}
          onClick={() => {
            setIsSecondaryClicked((prev) => !prev)
          }}
          color={color}
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
                {allSubCategories.map((subCategory) => (
                  <Checkbox
                    key={subCategory}
                    label={subCategory}
                    checked={selectedSubCategories.includes(subCategory)}
                    onClick={() => {
                      onCheckboxClick(subCategory)
                    }}
                  />
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
