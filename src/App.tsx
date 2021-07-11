import { css } from '@emotion/css'
import styled from '@emotion/styled'

import { MainContainer, TitleLogo } from './components/atoms'

function App() {
    return (
        <div className={containerStyle}>
            <MainContainer>
                <TitleLogo />
                <Container>Rest</Container>
            </MainContainer>
        </div>
    )
}

const containerStyle = css`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    position: relative;
`

const Container = styled.div`
    background: rgba(0, 0, 0, 0.2);
    place-self: stretch;
    display: grid;
    place-items: center;
`

export default App
