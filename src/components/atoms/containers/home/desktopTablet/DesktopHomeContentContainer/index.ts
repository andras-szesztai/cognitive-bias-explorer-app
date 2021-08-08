import styled from '@emotion/styled'

import { margins } from '../../../../../../constants/dimensions'

const DesktopHomeContentContainer = styled.div`
  place-self: stretch;

  margin-bottom: ${margins.topMainXl}px;

  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(24, 1fr);
`

export default DesktopHomeContentContainer
