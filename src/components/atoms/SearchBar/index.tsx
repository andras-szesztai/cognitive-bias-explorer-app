import { ChangeEvent, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { isBoolean } from 'lodash'

import { SearchIcon } from '../icons'

import { usePrevious } from '../../../hooks'

import { colors } from '../../../styles'

interface IProps {
  onBlur?: () => void
  onFocus?: () => void
  blurFromParent: boolean
  value: string
  onChange: (val: string) => void
}

const SearchBar = ({
  onBlur,
  onFocus,
  onChange,
  value,
  blurFromParent,
}: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const prevBlurFromParent = usePrevious(blurFromParent)
  useEffect(() => {
    if (
      isBoolean(prevBlurFromParent) &&
      !prevBlurFromParent &&
      !!blurFromParent
    ) {
      inputRef.current?.blur()
    }
  }, [blurFromParent, prevBlurFromParent])
  return (
    <div style={{ position: 'relative' }}>
      {}
      <IconContainer>
        <SearchIcon />
      </IconContainer>
      <Input
        ref={inputRef}
        autoComplete="off"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        value={value}
        id="search"
        type="text"
        placeholder="Search for biases"
      />
    </div>
  )
}

const Input = styled.input`
  padding: 4px 16px 4px 32px;
  border-radius: 4px;
  border: 1px solid ${colors.darkGray};

  :focus-visible {
    outline: none;
  }

  ::placeholder {
    line-height: 1;
    color: ${colors.darkGray};
    opacity: 1;
  }
`

const IconContainer = styled.div`
  position: absolute;
  top: 8px;
  left: 10px;
`

export default SearchBar
