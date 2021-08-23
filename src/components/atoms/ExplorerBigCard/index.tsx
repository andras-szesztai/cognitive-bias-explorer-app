import { isMobile, isMobileOnly } from 'react-device-detect'
import DetectableOverflow from 'react-detectable-overflow'

import { CollapseIcon, ExpandIcon, KeyboardIcon } from '../icons'

import { useActiveKeys } from '../../../hooks'

import { IBiasData, ISelectedBiasData } from '../../../types/data'

import {
  ExpandIconContainer,
  IconContainer,
  MainContainer,
  Paragraph,
  SubTitle,
  Title,
  TitleContainer,
} from './styles'
import colors, {
  categoryColors,
  categoryLightColors,
} from '../../../styles/colors'
import { useEffect, useState } from 'react'

interface IProps {
  selectedBias: ISelectedBiasData | undefined
  filteredBiasData: IBiasData[]
  layoutId?: string
  onClick?: () => void
  isExpanded?: boolean
  maxExpandedCardHeight?: number
}

const BigCard = ({
  selectedBias,
  filteredBiasData,
  maxExpandedCardHeight,
  layoutId,
  onClick,
  isExpanded,
}: IProps) => {
  const color = selectedBias
    ? categoryColors[selectedBias.category]
    : colors.white
  const colorLight = selectedBias
    ? categoryLightColors[selectedBias.category]
    : colors.white

  const activeKeys = useActiveKeys({
    filteredBiasData,
    selectedBias,
  })
  const [isOverFlowing, setIsOverflowing] = useState(false)
  useEffect(() => {
    if (isExpanded && !isOverFlowing) {
      setIsOverflowing(true)
    }
  }, [isExpanded, isOverFlowing])

  const renderIcon = () =>
    isMobileOnly && isOverFlowing ? (
      <ExpandIconContainer>
        {isExpanded ? <CollapseIcon /> : <ExpandIcon />}
      </ExpandIconContainer>
    ) : null

  return (
    <MainContainer
      layoutId={layoutId}
      initial={{
        backgroundColor: colorLight,
      }}
      animate={{
        backgroundColor: colorLight,
      }}
      onClick={() => {
        isOverFlowing && onClick?.()
      }}
      maxExpandedCardHeight={maxExpandedCardHeight}
      isMobile={isMobile}
    >
      {selectedBias ? (
        <>
          <TitleContainer
            initial={{
              backgroundColor: color,
            }}
            animate={{
              backgroundColor: color,
            }}
          >
            <Title>{selectedBias.cognitiveBias}</Title>
            {renderIcon()}
          </TitleContainer>
          <SubTitle>{selectedBias.subCategory}</SubTitle>
          <Paragraph color={color}>
            <DetectableOverflow
              style={{ height: '100%' }}
              onChange={(overflow) => !isExpanded && setIsOverflowing(overflow)}
            >
              {selectedBias.definition}
            </DetectableOverflow>
          </Paragraph>
          {!isMobile && (
            <IconContainer>
              <KeyboardIcon activeKeys={activeKeys} />
            </IconContainer>
          )}
        </>
      ) : (
        <>
          <TitleContainer noBorder>
            <Title>Start exploring!</Title>
            {renderIcon()}
          </TitleContainer>
          <Paragraph>
            Click around, filter and search for biases you would like to find
            out more about!
            {!isMobile &&
              'You can also use keyboard arrows or the WASD keys to browse around!'}
          </Paragraph>
          {!isMobile && (
            <IconContainer>
              <KeyboardIcon activeKeys={activeKeys} />
            </IconContainer>
          )}
        </>
      )}
    </MainContainer>
  )
}

export default BigCard
