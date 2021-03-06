import styled from '@emotion/styled'
import { isTablet } from 'react-device-detect'

import { heights } from '../../../../constants/dimensions'
import { breakPoints } from '../../../../styles'

const MainContentContainer = styled.div`
  width: 100vw;
  height: calc(100vh - ${heights.navbar}px);
  height: calc((var(--vh, 1vh) * 100) - ${heights.navbar}px);
  display: grid;
  place-items: center;
  position: relative;
  overflow-y: ${isTablet ? 'auto' : 'hidden'};

  @media (max-width: ${breakPoints.fifth}) {
    height: calc(
      100vh - ${heights.navbarMobile}px
    ); /* Fallback for browsers that do not support Custom Properties */
    height: calc((var(--vh, 1vh) * 100) - ${heights.navbarMobile}px);
  }
`

export default MainContentContainer
