import styled from '@emotion/styled'

const MobileHomeContentContainer = styled.div`
  place-self: stretch;

  display: grid;
  grid-row-gap: 16px;
  grid-template-rows: repeat(4, min-content);

  overflow-y: auto;
`

export default MobileHomeContentContainer
