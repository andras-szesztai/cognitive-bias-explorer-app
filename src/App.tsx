import { css } from '@emotion/css'
import { useState } from 'react'

import {
  MainContainer,
  TitleLogo,
  ContentContainer,
  SearchCardsContainer,
  CardsContainer,
  SmallCardsContainer,
  SmallCard,
} from './components/atoms'
import { ButtonWithDropdownControls } from './components/organisms'

import { getSubcategoriesPerCategory } from './utils/dataHelpers'

import { useKeyboardNavigation, useMakeFilteredData } from './hooks'

import { IBiasData } from './types/data'

const subCategoriesPerCategory = getSubcategoriesPerCategory()

export interface ISelectedBiasData extends IBiasData {
  position: number
}

function App() {
  const [selectedBias, setSelectedBias] = useState<
    ISelectedBiasData | undefined
  >(undefined)

  const [filters, setFilters] = useState(subCategoriesPerCategory)
  const [searchString, setSearchString] = useState('')

  const filteredBiasData = useMakeFilteredData({ filters })

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
            <div>Search</div>
            <CardsContainer>
              {/* // TODO make it organism */}
              <SmallCardsContainer>
                {filteredBiasData.map((bias, index) => {
                  return (
                    <SmallCard
                      key={bias.cognitiveBias}
                      bias={bias}
                      selectedBias={selectedBias}
                      setSelectedBias={setSelectedBias}
                      position={index + 1}
                    />
                  )
                })}
              </SmallCardsContainer>
              <div>{selectedBias?.definition}</div>
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
