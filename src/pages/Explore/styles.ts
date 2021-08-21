import styled from '@emotion/styled'

import { heights } from '../../constants/dimensions'

export const ContainerDesktop = styled.div`
  width: 100vw;
  height: calc(100vh - ${heights.navbar}px);
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
`

export const ContainerMobile = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
`
