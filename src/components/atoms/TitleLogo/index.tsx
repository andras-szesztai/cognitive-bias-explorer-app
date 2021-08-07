import { css } from '@emotion/css'
import styled from '@emotion/styled'

import { colors, fontSizesString, fontWeights } from '../../../styles'

const TitleLogo = () => {
  return (
    <div className={containerStyle}>
      <div className={pillContainerStyle}>
        <Pill color="yellow" top={-11} left={-8} />
        <Pill color="blue" top={42} left={175} />
        <Pill color="pink" top={-20} left={300} />
        <Pill color="green" top={50} left={466} />
      </div>
      <div className={titleContainerStyle}>
        <h1 className={titleStyle}>Cognitive Bias Explorer</h1>
      </div>
    </div>
  )
}

const containerStyle = css`
  display: flex;
  justify-content: flex-start;
  padding-left: 8px;
`

const titleContainerStyle = css`
  position: relative;
`

const titleStyle = css`
  font-size: ${fontSizesString.xxl};
  font-weight: ${fontWeights.bold};
  color: ${colors.darkGray};
  line-height: 0.8;
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
