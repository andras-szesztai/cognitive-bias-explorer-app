import styled from '@emotion/styled'

const topMargin = 64

const MainContainer = styled.div`
    width: 1140px;
    height: calc(100% - ${topMargin}px);
    margin-top: ${topMargin}px;

    display: grid;
    grid-row-gap: ${topMargin}px;
    grid-template-rows: min-content 1fr;
`

export default MainContainer
