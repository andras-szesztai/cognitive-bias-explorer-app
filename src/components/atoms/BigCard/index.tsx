import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { ISelectedBiasData } from '../../../types/data'

import { fontSizesString, fontWeights } from '../../../styles'
import colors, {
  categoryColors,
  categoryLightColors,
} from '../../../styles/colors'

interface IProps {
  selectedBias: ISelectedBiasData | undefined
}

// TODO add keyboard
const BigCard = ({ selectedBias }: IProps) => {
  const color = selectedBias ? categoryColors[selectedBias.category] : '#FFF'
  const colorLight = selectedBias
    ? categoryLightColors[selectedBias.category]
    : '#FFF'
  const borderColor = selectedBias ? colors.darkGray : '#FFF'

  return (
    <MainContainer
      initial={{
        borderColor: borderColor,
        backgroundColor: colorLight,
      }}
      animate={{
        borderColor: borderColor,
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
        </>
      ) : (
        <Paragraph>Please select</Paragraph>
      )}
    </MainContainer>
  )
}

const MainContainer = styled(motion.div)`
  place-self: stretch;
  border: 1px solid red;
  border-radius: 8px;
  padding: 32px;
  padding-bottom: 64px;

  display: grid;
  grid-template-rows: repeat(2, min-content) 1fr;
  grid-row-gap: 8px;

  color: ${colors.darkGray};

  min-height: 100%;
`

const Title = styled(motion.h2)`
  font-size: ${fontSizesString.lg};
  padding: 4px 8px;
  border: 1px solid ${colors.darkGray};
  border-radius: 6px;
`

const SubTitle = styled.h4`
  padding: 8px;
  font-style: italic;
  font-weight: ${fontWeights.default};
`

const Paragraph = styled.p`
  line-height: 1.7;
  padding: 8px;
  overflow-y: auto;
`

export default BigCard
