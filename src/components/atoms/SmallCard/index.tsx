import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'
import kebabCase from 'lodash/kebabCase'

import { IBiasData, ISelectedBiasData } from '../../../types/data'

import { breakPoints, colors } from '../../../styles'
import { categoryColors, categoryLightColors } from '../../../styles/colors'

interface Props {
  bias: IBiasData
  position: number
  selectedBias: ISelectedBiasData | undefined
  setSelectedBias: Dispatch<SetStateAction<ISelectedBiasData | undefined>>
}

const SmallCard = ({
  bias,
  setSelectedBias,
  selectedBias,
  position,
}: Props) => {
  const color = categoryColors[bias.category]
  const colorLight = categoryLightColors[bias.category]
  const isSelected = selectedBias?.cognitiveBias === bias.cognitiveBias

  const borderColor = isSelected ? colors.darkGray : colors.white
  const bgColor = isSelected ? colorLight : colors.white
  return (
    <Container
      id={kebabCase(bias.cognitiveBias)}
      onClick={() => setSelectedBias({ ...bias, position })}
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

  @media (max-width: ${breakPoints.fifth}) {
    width: 160px;
    padding: 8px;
    grid-row-gap: 4px;
  }
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
