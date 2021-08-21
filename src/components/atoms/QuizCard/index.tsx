import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { breakPoints, colors, fontSizesString } from '../../../styles'

interface Props {
  text: string
  color: string
  colorLight: string
  isActive: boolean
  handleClick: () => void
}

const QuizCard = ({
  text,
  color,
  colorLight,
  handleClick,
  isActive,
}: Props) => {
  const borderColor = isActive ? colors.darkGray : colors.white
  const bgColor = isActive ? colorLight : colors.white
  return (
    <Container
      onClick={handleClick}
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
      <Title>{text}</Title>
    </Container>
  )
}

const Container = styled(motion.button)`
  width: auto;

  padding: 16px;
  border-radius: 4px;
  text-align: left;

  display: grid;
  grid-template-rows: min-content 1fr;
  grid-row-gap: 8px;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: #fff;
  background-color: #fff;

  @media (max-width: ${breakPoints.fifth}) {
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
  font-size: ${fontSizesString.default};
  color: ${colors.darkGray};
  padding: 0 2px;
  user-select: none;

  @media (max-width: ${breakPoints.fifth}) {
    font-size: ${fontSizesString.sm};
    line-height: 1.4;
  }

  @media (max-width: ${breakPoints.fifth}) {
    grid-template-columns: min-content;
  }
`

export default QuizCard
