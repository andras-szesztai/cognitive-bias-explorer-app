import { css } from '@emotion/css'
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
  { color: 'yellow', top: -7, left: -5 },
  { color: 'blue', top: 38, left: 156 },
  { color: 'pink', top: -2, left: 195 },
  { color: 'green', top: 65, left: 45 },
]

interface IProps {
  isMobileOnly?: boolean
}

const TitleLogo = ({ isMobileOnly }: IProps) => {
  let history = useHistory()
  const pillsArray = isMobileOnly ? pillsMobile : pillsDesktop
  return (
    <Container onClick={() => history.push('/')}>
      <div className={pillContainerStyle}>
        {pillsArray.map((pill) => (
          <Pill key={pill.color} {...pill} />
        ))}
      </div>
      <div className={titleContainerStyle}>
        <Title isMobileOnly={isMobileOnly}>Cognitive Bias Explorer</Title>
      </div>
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

const titleContainerStyle = css`
  position: relative;
`

const Title = styled.h1<{ isMobileOnly?: boolean }>`
  font-size: ${({ isMobileOnly }) =>
    isMobileOnly ? fontSizesString.xl : fontSizesString.md};
  line-height: ${({ isMobileOnly }) => (isMobileOnly ? 1 : 0.8)};
  font-weight: ${fontWeights.bold};
  color: ${colors.darkGray};
  user-select: none;
`

const pillContainerStyle = css`
  position: relative;
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
