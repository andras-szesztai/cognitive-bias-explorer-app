import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'

import {
  breakPoints,
  colors,
  fontSizesString,
  fontWeights,
} from '../../../styles'

const pillsDesktop: PillProps[] = [
  { color: 'yellow', top: -11, left: -9 },
  { color: 'blue', top: 28, left: 28 },
  { color: 'pink', top: -21, left: 114 },
  { color: 'green', top: 21, left: 180 },
]

const pillsMobile: PillProps[] = [
  { color: 'yellow', top: -12, left: -5 },
  { color: 'blue', top: 28, left: 152 },
  { color: 'pink', top: -6, left: 188 },
  { color: 'green', top: 22, left: 45 },
]

interface IProps {
  isMobileOnly?: boolean
}

const TitleLogo = ({ isMobileOnly }: IProps) => {
  let history = useHistory()
  const pillsArray = isMobileOnly ? pillsMobile : pillsDesktop
  return (
    <Container onClick={() => history.push('/')}>
      <RelativeContainer>
        {pillsArray.map((pill) => (
          <Pill key={pill.color} {...pill} />
        ))}
      </RelativeContainer>
      <RelativeContainer>
        <Title isMobileOnly={isMobileOnly}>Cognitive Bias Explorer</Title>
      </RelativeContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 8px;
  cursor: pointer;

  @media (max-width: ${breakPoints.fifth}) {
    padding-left: 0px;
  }
`

const RelativeContainer = styled.div`
  position: relative;
`

const Title = styled.h1<{ isMobileOnly?: boolean }>`
  font-size: ${fontSizesString.md};
  line-height: ${({ isMobileOnly }) => (isMobileOnly ? 1 : 0.8)};
  font-weight: ${fontWeights.bold};
  color: ${colors.darkGray};
  user-select: none;
`

type colorTypes = 'blue' | 'yellow' | 'pink' | 'green'

interface PillProps {
  color: colorTypes
  top?: number
  left?: number
}

const Pill = styled.span<PillProps>`
  width: 60px;
  height: 7px;
  border-radius: 4px;
  position: absolute;
  border: 1px solid ${colors.darkGray};

  background: ${({ color }) => colors[color]};
  top: ${({ top }) => top || 0}px;
  left: ${({ left }) => left || 0}px;
`

export default TitleLogo
