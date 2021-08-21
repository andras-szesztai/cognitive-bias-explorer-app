import styled from '@emotion/styled'

import { heights } from '../../constants/dimensions'
import { breakPoints } from '../../styles'

// TODO: combine with others
export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - ${heights.navbar}px);
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: ${breakPoints.fifth}) {
    height: calc(100vh - ${heights.navbarMobile}px);
  }
`
