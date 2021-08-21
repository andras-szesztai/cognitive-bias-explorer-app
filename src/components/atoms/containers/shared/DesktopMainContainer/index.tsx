import styled from '@emotion/styled'

import { margins, widths } from '../../../../../constants/dimensions'
import { breakPoints } from '../../../../../styles'

const DesktopMainContainer = styled.div<{ withMarginBottom?: boolean }>`
  position: relative;
  width: ${widths.maxContentXl}px;
  height: calc(
    100% -
      ${({ withMarginBottom }) =>
        withMarginBottom ? margins.topMainXl * 2 : margins.topMainXl}px
  );
  min-height: calc(
    100% -
      ${({ withMarginBottom }) =>
        withMarginBottom ? margins.topMainXl * 2 : margins.topMainXl}px
  );
  margin-top: ${margins.topMainXl}px;
  margin-bottom: ${({ withMarginBottom }) =>
    withMarginBottom ? margins.topMainXl : 0}px;

  @media (max-width: ${breakPoints.first}) {
    width: ${widths.maxContentMd}px;
  }

  @media (max-width: ${breakPoints.second}) {
    width: ${widths.maxContentSm}px;
    grid-row-gap: ${margins.topMainMd}px;
    margin-top: ${margins.topMainMd}px;
    margin-bottom: ${({ withMarginBottom }) =>
      withMarginBottom ? margins.topMainMd : 0}px;
    height: calc(
      100% -
        ${({ withMarginBottom }) =>
          withMarginBottom ? margins.topMainMd * 2 : margins.topMainMd}px
    );
    min-height: calc(
      100% -
        ${({ withMarginBottom }) =>
          withMarginBottom ? margins.topMainXl * 2 : margins.topMainXl}px
    );
  }

  @media (max-width: ${breakPoints.third}) {
    width: ${widths.maxContentXs}px;
  }

  @media (max-width: ${breakPoints.fourth}) {
    width: ${widths.maxContentXxs}px;
  }

  display: grid;
`

export default DesktopMainContainer
