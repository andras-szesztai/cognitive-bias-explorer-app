import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { colors } from '../../../styles'
import { categoryColors } from '../../../styles/colors'
import { IBiasData } from '../../../types/data'

interface Props {
  bias: IBiasData
}

const SmallCard = ({ bias }: Props) => {
  const color = categoryColors[bias.category]
  return (
    <Container>
      <Pill color={color} />
      <Title>{bias.cognitiveBias}</Title>
    </Container>
  )
}

const Container = styled(motion.div)`
  width: 180px;
  min-height: 100px;

  padding: 16px;
  border-radius: 4px;

  display: grid;
  grid-template-rows: min-content 1fr;
  grid-row-gap: 8px;
`

const Pill = styled.div<{ color: string }>`
  justify-self: stretch;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ color }) => color};
`

const Title = styled.span`
  font-size: 16px;
  color: ${colors.darkGray};
  padding: 0 2px;
`

export default SmallCard
