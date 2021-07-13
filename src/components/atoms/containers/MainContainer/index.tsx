import styled from '@emotion/styled'

const topMargin = 64

//TODO: make it responsive
const MainContainer = styled.div`
  width: 1240px;
  height: calc(100% - ${topMargin}px);
  max-height: calc(100% - ${topMargin}px);
  min-height: calc(100% - ${topMargin}px);
  margin-top: ${topMargin}px;

  display: grid;
  grid-row-gap: ${topMargin}px;
  grid-template-rows: min-content 1fr;
`

export default MainContainer
