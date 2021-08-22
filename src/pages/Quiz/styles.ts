import styled from '@emotion/styled'

import { heights } from '../../constants/dimensions'
import { breakPoints } from '../../styles'

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  height: 100vh;
  height: -webkit-fill-available;
  max-height: 100vh;
  max-height: -webkit-fill-available;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: ${breakPoints.fifth}) {
    height: calc(100vh - ${heights.navbarMobile}px);
  }
`
