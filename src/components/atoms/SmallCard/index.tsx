import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'

import { IBiasData } from '../../../types/data'

import { colors } from '../../../styles'
import { categoryColors, categoryLightColors } from '../../../styles/colors'

interface Props {
  bias: IBiasData
  setSelectedBias: Dispatch<SetStateAction<IBiasData | undefined>>
  selectedBias?: IBiasData
}

const SmallCard = ({ bias, setSelectedBias, selectedBias }: Props) => {
  const color = categoryColors[bias.category]
  const colorLight = categoryLightColors[bias.category]
  const isSelected = selectedBias?.cognitiveBias === bias.cognitiveBias

  const borderColor = isSelected ? colors.darkGray : '#FFF'
  const bgColor = isSelected ? colorLight : '#FFF'
  return (
    <Container
      onClick={() => setSelectedBias(bias)}
      initial={{
        borderColor: borderColor,
        backgroundColor: bgColor,
      }}
      animate={{
        borderColor: borderColor,
        backgroundColor: bgColor,
      }}
      whileHover={{
        borderColor: colors.darkGray,
        backgroundColor: colorLight,
      }}
    >
      <Pill color={color} />
      <Title>{bias.cognitiveBias}</Title>
    </Container>
  )
}

// TODO Make it button
const Container = styled(motion.div)`
  width: 200px;

  padding: 16px;
  border-radius: 4px;

  display: grid;
  grid-template-rows: min-content 1fr;
  grid-row-gap: 8px;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: #fff;
  background-color: #fff;
`

const Pill = styled.div<{ color: string }>`
  justify-self: stretch;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ color }) => color};
  border: 1px solid ${colors.darkGray};
`

const Title = styled.span`
  font-size: 16px;
  color: ${colors.darkGray};
  padding: 0 2px;
  user-select: none;
`

export default SmallCard
