import { isMobile, isMobileOnly } from 'react-device-detect'

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

  const renderIcon = () =>
    isMobileOnly ? (
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
      onClick={onClick}
      maxExpandedCardHeight={maxExpandedCardHeight}
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
          <Paragraph color={color}>{selectedBias.definition}</Paragraph>
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
          <SubTitle>What are cognitive biases?</SubTitle>
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
