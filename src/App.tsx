import { css } from '@emotion/css'
import { useState } from 'react'

import {
  MainContainer,
  TitleLogo,
  ContentContainer,
  SearchCardsContainer,
  CardsContainer,
  SearchBar,
  BigCard,
} from './components/atoms'
import {
  ButtonWithDropdownControls,
  SmallCardsContainerContent,
} from './components/organisms'

import { getSubcategoriesPerCategory } from './utils/dataHelpers'

import { useKeyboardNavigation, useMakeFilteredData } from './hooks'

import { ISelectedBiasData } from './types/data'

const subCategoriesPerCategory = getSubcategoriesPerCategory()

function App() {
  const [selectedBias, setSelectedBias] = useState<
    ISelectedBiasData | undefined
  >(undefined)

  const [filters, setFilters] = useState(subCategoriesPerCategory)
  const [searchString, setSearchString] = useState('')

  const filteredBiasData = useMakeFilteredData({
    filters,
    searchString,
  })

  const [
    keyboardNavigationIsEnabled,
    setKeyboardNavigationIsEnabled,
  ] = useKeyboardNavigation({
    selectedBias,
    setSelectedBias,
    filteredBiasData,
  })

  return (
    <div className={style}>
      <MainContainer>
        <TitleLogo />
        <ContentContainer>
          <ButtonWithDropdownControls
            filters={filters}
            subCategoriesPerCategory={subCategoriesPerCategory}
            setFilters={setFilters}
          />
          <SearchCardsContainer>
            <SearchBar
              onFocus={() => setKeyboardNavigationIsEnabled(false)}
              onBlur={() => setKeyboardNavigationIsEnabled(true)}
              blurFromParent={keyboardNavigationIsEnabled}
              onChange={(val) => setSearchString(val)}
              value={searchString}
            />
            <CardsContainer>
              <SmallCardsContainerContent
                filteredBiasData={filteredBiasData}
                setSelectedBias={setSelectedBias}
                selectedBias={selectedBias}
              />
              <BigCard
                selectedBias={selectedBias}
                filteredBiasData={filteredBiasData}
              />
            </CardsContainer>
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

export default App
