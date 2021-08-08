import styled from '@emotion/styled'

import { ArrowMainContainer, ArrowSubContainer } from '../containers'
import { ChevronIcon } from '../icons'

import { fontSizesString } from '../../../styles'

interface IProps {
  onClick: React.Dispatch<React.SetStateAction<boolean>>
  value: boolean
}

const MobileFiltersButton = ({ onClick, value }: IProps) => {
  return (
    <Button onClick={() => onClick((prev) => !prev)}>
      <span>Search and filters</span>
      <ArrowMainContainer>
        <ArrowSubContainer animate={{ rotate: value ? 0 : 180 }}>
          <ChevronIcon height={6} />
        </ArrowSubContainer>
      </ArrowMainContainer>
    </Button>
  )
}

const Button = styled.button`
  place-self: stretch;
  margin-bottom: 16px;
  padding: 2px 8px 2px 0px;
  font-size: ${fontSizesString.default};
  line-height: 1;
  border: none;
  background: none;

  width: 100%;
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
`

export default MobileFiltersButton
