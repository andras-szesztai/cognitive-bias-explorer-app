import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { DisplayContainer } from '../../atoms'

import { TCategories } from '../../../types/data'

import colors, { categoryColors } from '../../../styles/colors'
import { fontWeights } from '../../../styles'
interface Props {
    category: TCategories
    onClick: () => void
}

const ButtonWithDropdown = ({ category, onClick }: Props) => {
    const handleClick = () => {
        onClick()
    }
    return (
        <DisplayContainer>
            <Container color={categoryColors[category]}>
                <MainButton onClick={handleClick}>Hello</MainButton>
                <Divider />
                <div>!!!</div>
            </Container>
        </DisplayContainer>
    )
}

const Container = styled.div<{ color: string }>`
    position: relative;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 0;

    border-radius: 4px;

    box-sizing: content-box;

    background: ${({ color }) => color};
    border: 1px solid ${colors.darkGray};
`

const Divider = styled.span`
    width: 1px;
    height: 100%;
    background: ${colors.darkGray};
`

const MainButton = styled(motion.button)`
    place-self: stretch;
    padding: 8px 16px;

    font-weight: ${fontWeights.bold};

    cursor: pointer;
    border: none;
    background: none;
`

export default ButtonWithDropdown
