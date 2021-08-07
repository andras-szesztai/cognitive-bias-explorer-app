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
import {
  NEED_TO_ACT_FAST,
  NOT_ENOUGH_MEANING,
  TOO_MUCH_INFORMATION,
  WHAT_DO_WE_REMEMBER,
} from './constants/categories'

const subCategoriesPerCategory = getSubcategoriesPerCategory()

const defaultFilters = {
  [WHAT_DO_WE_REMEMBER]: [] as string[],
  [NEED_TO_ACT_FAST]: [] as string[],
  [NOT_ENOUGH_MEANING]: [] as string[],
  [TOO_MUCH_INFORMATION]: [] as string[],
}

function App() {
  const [selectedBias, setSelectedBias] = useState<
    ISelectedBiasData | undefined
  >(undefined)

  const [filters, setFilters] = useState(defaultFilters)
  const [searchString, setSearchString] = useState('')

  const filteredBiasData = useMakeFilteredData({
    filters,
    searchString,
    selectedBias,
    setSelectedBias,
  })

  const [keyboardNavigationIsEnabled, setKeyboardNavigationIsEnabled] =
    useKeyboardNavigation({
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
              <BigCard
                selectedBias={selectedBias}
                filteredBiasData={filteredBiasData}
              />
              <SmallCardsContainerContent
                filteredBiasData={filteredBiasData}
                setSelectedBias={setSelectedBias}
                selectedBias={selectedBias}
                searchString={searchString}
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
