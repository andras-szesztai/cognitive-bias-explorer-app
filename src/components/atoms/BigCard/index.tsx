import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { KeyboardIcon } from '../icons'

import { useActiveKeys } from '../../../hooks'

import { IBiasData, ISelectedBiasData } from '../../../types/data'

import { fontSizesString, fontWeights } from '../../../styles'
import colors, {
  categoryColors,
  categoryLightColors,
} from '../../../styles/colors'

interface IProps {
  selectedBias: ISelectedBiasData | undefined
  filteredBiasData: IBiasData[]
}

const BigCard = ({ selectedBias, filteredBiasData }: IProps) => {
  const color = selectedBias
    ? categoryColors[selectedBias.category]
    : colors.white
  const colorLight = selectedBias
    ? categoryLightColors[selectedBias.category]
    : colors.white

  const activeKeys = useActiveKeys({ filteredBiasData, selectedBias })
  return (
    <MainContainer
      initial={{
        backgroundColor: colorLight,
      }}
      animate={{
        backgroundColor: colorLight,
      }}
    >
      {selectedBias ? (
        <>
          <Title
            initial={{
              backgroundColor: color,
            }}
            animate={{
              backgroundColor: color,
            }}
          >
            {selectedBias.cognitiveBias}
          </Title>
          <SubTitle>{selectedBias.subCategory}</SubTitle>
          <Paragraph>{selectedBias.definition}</Paragraph>
          <IconContainer>
            <KeyboardIcon activeKeys={activeKeys} />
          </IconContainer>
        </>
      ) : (
        <>
          <Title noBorder>Welcome to the Cognitive Bias Explorer!</Title>
          <SubTitle>What are cognitive biases?</SubTitle>
          <Paragraph>
            They are inherent thinking "blind spots" that reduce thinking
            accuracy and result inaccurate, often irrational conclusions. Much
            like logical fallacies, they can be viewed as either as causes or
            effects but can generally be reduced to broken thinking. Some are so
            common that they are given names to easier identify, emphasize,
            analyze, and ultimately avoid. These biases and their definitions
            come directly from the enriched version of the{' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Cognitive_Bias_Codex_With_Definitions,_an_Extension_of_the_work_of_John_Manoogian_by_Brian_Morrissette.jpg"
              target="_blank"
              rel="noreferrer"
            >
              Cognitive Bias Codex
            </a>
            . Click around, filter and search for biases that you would like to
            find out more about! You can also use keyboard arrows or the WASD
            keys to browse around!&nbsp;{' '}
          </Paragraph>
          <IconContainer>
            <KeyboardIcon activeKeys={activeKeys} />
          </IconContainer>
        </>
      )}
    </MainContainer>
  )
}

const MainContainer = styled(motion.div)`
  position: relative;

  place-self: stretch;
  border: 1px solid ${colors.darkGray};
  border-radius: 8px;
  padding: 36px;
  padding-bottom: 64px;

  display: grid;
  grid-template-rows: repeat(2, min-content) 1fr;
  grid-row-gap: 8px;

  color: ${colors.darkGray};

  min-height: 100%;
`

const Title = styled(motion.h2)<{ noBorder?: boolean }>`
  font-size: ${fontSizesString.lg};
  line-height: 1.3;
  padding: 4px 8px;
  border: 1px solid
    ${({ noBorder }) => (noBorder ? 'transparent' : colors.darkGray)};
  border-radius: 6px;
`

const SubTitle = styled.h4`
  padding: 0px 8px;
  line-height: 1.6;
  font-style: italic;
  font-weight: ${fontWeights.default};
  font-size: ${fontSizesString.sm};
`

const Paragraph = styled.p`
  font-size: ${fontSizesString.default};
  padding: 0px 8px;
  line-height: 1.8;
  overflow-y: auto;

  a {
    color: ${colors.blue};

    :visited {
      color: ${colors.blue};
    }
  }
`

const IconContainer = styled.div`
  position: absolute;
  right: 16px;
  bottom: 8px;
`

export default BigCard
