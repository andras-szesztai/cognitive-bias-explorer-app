import { css } from '@emotion/css'
import styled from '@emotion/styled'

import {
    MainContainer,
    TitleLogo,
    ContentContainer,
    SearchCardsContainer,
    FiltersContainer,
    ChevronIcon,
} from './components/atoms'
import { ButtonWithDropdown } from './components/molecules'

function App() {
    return (
        <div className={style}>
            <MainContainer>
                <TitleLogo />
                <ContentContainer>
                    <FiltersContainer>
                        <Container>
                            <ChevronIcon />
                        </Container>
                        <ButtonWithDropdown />
                        <Container>Need to act fast</Container>
                        <Container>Too much info</Container>
                    </FiltersContainer>
                    <SearchCardsContainer>
                        <Container>Searches</Container>
                        <Container />
                    </SearchCardsContainer>
                </ContentContainer>
            </MainContainer>
        </div>
    )
}

const style = css`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    position: relative;
`

// TODO remove
const Container = styled.div`
    background: rgba(0, 0, 0, 0.2);
    place-self: stretch;
    display: grid;
    place-items: center;
`

export default App
