import styled from '@emotion/styled'
import { useState } from 'react'
import { isMobileOnly } from 'react-device-detect'

import { DesktopTabletView, MobileView } from './components/templates'

import { getSubcategoriesPerCategory } from './utils/dataHelpers'

import { useMakeFilteredData } from './hooks'

import {
  NEED_TO_ACT_FAST,
  NOT_ENOUGH_MEANING,
  TOO_MUCH_INFORMATION,
  WHAT_DO_WE_REMEMBER,
} from './constants/categories'

import { ISelectedBiasData } from './types/data'

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

  return (
    <Container>
      {!isMobileOnly && (
        <DesktopTabletView
          selectedBias={selectedBias}
          setSelectedBias={setSelectedBias}
          filteredBiasData={filteredBiasData}
          subCategoriesPerCategory={subCategoriesPerCategory}
          filters={filters}
          setFilters={setFilters}
          setSearchString={setSearchString}
          searchString={searchString}
        />
      )}
      {isMobileOnly && (
        <MobileView
          selectedBias={selectedBias}
          setSelectedBias={setSelectedBias}
          filteredBiasData={filteredBiasData}
          subCategoriesPerCategory={subCategoriesPerCategory}
          filters={filters}
          setFilters={setFilters}
          setSearchString={setSearchString}
          searchString={searchString}
        />
      )}
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  position: relative;
`

export default App
