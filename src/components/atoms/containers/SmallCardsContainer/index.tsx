import styled from '@emotion/styled'

const SmallCardsContainer = styled.div`
  place-self: stretch;
  display: grid;
  grid-template-columns: repeat(3, min-content);
  justify-content: space-between;
  grid-row-gap: 16px;
  align-content: start;

  overflow-y: scroll;
`

export default SmallCardsContainer
