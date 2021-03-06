import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useDetectClickOutside } from 'react-detect-click-outside'
import { isMobileOnly } from 'react-device-detect'

import {
  ChevronIcon,
  DisplayContainer,
  Checkbox,
  ArrowMainContainer,
  ArrowSubContainer,
} from '../../atoms'

import { useMainButtonStatus } from './hooks'

import { TCategories } from '../../../types/data'

import {
  Container,
  Divider,
  MainButton,
  DropdownButton,
  DropdownContainer,
  ListContainer,
  MobileColorLegend,
} from './styles'
import colors, {
  categoryColors,
  categoryLightColors,
} from '../../../styles/colors'
import { getOpacityInOut } from '../../../styles/animations'

export interface Props {
  category: TCategories
  selectedSubCategories: string[]
  allSubCategories: string[]
  onMainClick: () => void
  onCheckboxClick: (subCategory: string) => void
  zIndexAdjust: number
  parentWidth: number
}

const ButtonWithDropdown = ({
  category,
  selectedSubCategories,
  allSubCategories,
  onMainClick,
  onCheckboxClick,
  zIndexAdjust,
  parentWidth,
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

  const color = categoryColors[category]
  const lightColor = categoryLightColors[category]
  const mainButtonColor = mainButtonStatus === 'full' ? color : colors.white
  const secondaryButtonColor = isSecondaryHovered ? lightColor : color

  return (
    <DisplayContainer>
      <Container color={color} ref={ref} zIndexAdjust={zIndexAdjust}>
        <MainButton
          initial={{ background: mainButtonColor }}
          animate={{ background: mainButtonColor }}
          onClick={onMainClick}
          color={color}
          width={parentWidth}
        >
          {category}
        </MainButton>
        <Divider />
        {!isMobileOnly && (
          <>
            <DropdownButton
              onMouseEnter={() => setIsSecondaryHovered(true)}
              onMouseLeave={() => setIsSecondaryHovered(false)}
              onClick={() => {
                setIsSecondaryClicked((prev) => !prev)
              }}
              color={color}
            >
              <ArrowMainContainer
                initial={{ background: secondaryButtonColor }}
                animate={{ background: secondaryButtonColor }}
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
          </>
        )}
        {isMobileOnly && <MobileColorLegend onClick={onMainClick} />}
      </Container>
    </DisplayContainer>
  )
}

export default ButtonWithDropdown
