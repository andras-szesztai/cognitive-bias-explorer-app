import styled from '@emotion/styled'

import { heights } from '../../constants/dimensions'

export const Container = styled.div<{ isMobileOnly: boolean }>`
  width: 100vw;
  height: calc(
    100vh -
      ${({ isMobileOnly }) =>
        isMobileOnly ? heights.navbarMobile : heights.navbar}px
  );
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
`
