import { useState } from 'react'
import { isMobileOnly } from 'react-device-detect'

import { DesktopTabletView, MobileView } from '../../components/templates'

import { getSubcategoriesPerCategory } from '../../utils/dataHelpers'

import { useMakeFilteredData } from '../../hooks'

import { defaultFilters } from '../../constants/filters'

import { ISelectedBiasData } from '../../types/data'

import { Container } from './styles'

const subCategoriesPerCategory = getSubcategoriesPerCategory()

const Explore = () => {
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

export default Explore
