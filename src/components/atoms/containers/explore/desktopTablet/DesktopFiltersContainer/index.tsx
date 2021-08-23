import styled from '@emotion/styled'

import { breakPoints } from '../../../../../../styles'

const FiltersContainer = styled.div`
  place-self: stretch;

  display: grid;
  justify-content: start;
  grid-column-gap: 16px;
  grid-auto-flow: column;

  @media (max-width: ${breakPoints.first}) {
    grid-template-rows: repeat(2, max-content);
    grid-row-gap: 16px;
  }

  @media (max-width: ${breakPoints.fourth}) {
    grid-auto-flow: row;
    grid-row-gap: 8px;
  }
`

export default FiltersContainer
