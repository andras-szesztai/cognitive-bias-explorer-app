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
  autoHeight?: boolean
  layoutId?: string
  onClick?: () => void
  isExpanded?: boolean
}

const BigCard = ({
  selectedBias,
  filteredBiasData,
  autoHeight,
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
  return (
    <MainContainer
      layoutId={layoutId}
      autoHeight={autoHeight}
      initial={{
        backgroundColor: colorLight,
      }}
      animate={{
        backgroundColor: colorLight,
      }}
      onClick={onClick}
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
            <ExpandIconContainer>
              {isMobileOnly && (isExpanded ? <CollapseIcon /> : <ExpandIcon />)}
            </ExpandIconContainer>
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
            <Title>Welcome to the Cognitive Bias Explorer!</Title>
            {isMobileOnly && (isExpanded ? <CollapseIcon /> : <ExpandIcon />)}
          </TitleContainer>
          <SubTitle>What are cognitive biases?</SubTitle>
          <Paragraph>
            Inherent thinking "blind spots" that reduce thinking accuracy and
            result inaccurate, often irrational conclusions. Much like logical
            fallacies, they can be viewed as either as causes or effects but can
            generally be reduced to broken thinking. Some are so common that
            they are given names to easier identify, emphasize, analyze, and
            ultimately avoid. These biases and their definitions come directly
            from the{' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Cognitive_Bias_Codex_With_Definitions,_an_Extension_of_the_work_of_John_Manoogian_by_Brian_Morrissette.jpg"
              target="_blank"
              rel="noreferrer"
            >
              Cognitive Bias Codex
            </a>
            . Click around, filter and search for biases you would like to find
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
