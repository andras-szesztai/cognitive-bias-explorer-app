import { css } from '@emotion/css'
import styled from '@emotion/styled'

import {
  breakPoints,
  colors,
  fontSizesString,
  fontWeights,
} from '../../../styles'

const pillsDesktop: PillProps[] = [
  { color: 'yellow', top: -11, left: -8 },
  { color: 'blue', top: 42, left: 175 },
  { color: 'pink', top: -20, left: 300 },
  { color: 'green', top: 50, left: 466 },
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
  const pillsArray = isMobileOnly ? pillsMobile : pillsDesktop
  return (
    <div className={containerStyle}>
      <div className={pillContainerStyle}>
        {pillsArray.map((pill) => (
          <Pill key={pill.color} {...pill} />
        ))}
      </div>
      <div className={titleContainerStyle}>
        <Title isMobileOnly={isMobileOnly}>Cognitive Bias Explorer</Title>
      </div>
    </div>
  )
}

const containerStyle = css`
  display: flex;
  justify-content: flex-start;
  padding-left: 8px;

  @media (max-width: ${breakPoints.fifth}) {
    padding-left: 0px;
  }
`

const titleContainerStyle = css`
  position: relative;
`

const Title = styled.h1<{ isMobileOnly?: boolean }>`
  font-size: ${({ isMobileOnly }) =>
    isMobileOnly ? fontSizesString.xl : fontSizesString.xxl};
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
  width: 80px;
  height: 8px;
  border-radius: 4px;
  position: absolute;
  border: 1px solid ${colors.darkGray};

  background: ${({ color }) => colors[color]};
  top: ${({ top }) => top || 0}px;
  left: ${({ left }) => left || 0}px;
`

export default TitleLogo
