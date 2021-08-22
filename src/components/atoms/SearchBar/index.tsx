import { ChangeEvent, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { isBoolean } from 'lodash'
import { isMobileOnly } from 'react-device-detect'
import { usePrevious } from 'rooks'

import { CloseIcon, SearchIcon } from '../icons'

import { breakPoints, colors, fontSizesString } from '../../../styles'

interface IProps {
  onBlur?: () => void
  onFocus?: () => void
  blurFromParent: boolean
  value: string
  onChange: (val: string) => void
  withMarginBottom?: boolean
}

const SearchBar = ({
  onBlur,
  onFocus,
  onChange,
  value,
  blurFromParent,
  withMarginBottom,
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
    <Container withMarginBottom={withMarginBottom}>
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
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
      {!!value && (
        <CloseIconContainer
          isMobileOnly={isMobileOnly}
          onClick={() => onChange('')}
        >
          <CloseIcon />
        </CloseIconContainer>
      )}
    </Container>
  )
}

const Container = styled.div<{ withMarginBottom?: boolean }>`
  position: relative;

  margin-bottom: ${({ withMarginBottom }) => (withMarginBottom ? 16 : 0)}px;
`

const Input = styled.input`
  padding: 5px 16px 5px 32px;
  border-radius: 4px;
  border: 1px solid ${colors.darkGray};
  width: 282px;
  font-size: ${fontSizesString.default};

  :focus-visible {
    outline: none;
  }

  ::placeholder {
    line-height: 1.6;
    font-size: ${fontSizesString.default};
    color: ${colors.darkGray};
    opacity: 1;
  }

  @media (max-width: ${breakPoints.fifth}) {
    width: 100%;
    font-size: ${fontSizesString.sm};

    ::placeholder {
      line-height: 1.4;
      font-size: ${fontSizesString.sm};
    }
  }
`

const SearchIconContainer = styled.div`
  position: absolute;
  top: 8px;
  left: 10px;
`

const CloseIconContainer = styled.button<{ isMobileOnly: boolean }>`
  position: absolute;
  top: 6px;
  ${({ isMobileOnly }) =>
    !isMobileOnly
      ? css`
          left: 260px;
        `
      : css`
          right: 10px;
        `}

  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`

export default SearchBar
