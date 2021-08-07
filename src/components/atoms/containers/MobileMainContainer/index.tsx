import styled from '@emotion/styled'

const MobileMainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 16px;

  display: grid;
  grid-template-rows: repeat(2, min-content) 1fr min-content;
  grid-row-gap: 16px;
`

export default MobileMainContainer
