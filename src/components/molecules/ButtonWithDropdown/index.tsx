import styled from '@emotion/styled'

import { DisplayContainer } from '../../atoms'

const ButtonWithDropdown = () => {
    return (
        <DisplayContainer>
            <Container>
                <div>Hello</div>
                <div>World</div>
                <div>!!!</div>
            </Container>
        </DisplayContainer>
    )
}

const Container = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 0;
`

export default ButtonWithDropdown
