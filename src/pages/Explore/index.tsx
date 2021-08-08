import { useState } from 'react'
import { isMobileOnly } from 'react-device-detect'

import {
  DesktopTabletExploreView,
  MobileExploreView,
} from '../../components/templates/explore'

import { getSubcategoriesPerCategory } from '../../utils/dataHelpers'

import { useMakeFilteredData } from '../../hooks'

import { defaultFilters } from '../../constants/filters'

import { ISelectedBiasData } from '../../types/data'

import { ContainerDesktop, ContainerMobile } from './styles'

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
    <>
      {!isMobileOnly && (
        <ContainerDesktop>
          <DesktopTabletExploreView
            selectedBias={selectedBias}
            setSelectedBias={setSelectedBias}
            filteredBiasData={filteredBiasData}
            subCategoriesPerCategory={subCategoriesPerCategory}
            filters={filters}
            setFilters={setFilters}
            setSearchString={setSearchString}
            searchString={searchString}
          />
        </ContainerDesktop>
      )}
      {isMobileOnly && (
        <ContainerMobile>
          <MobileExploreView
            selectedBias={selectedBias}
            setSelectedBias={setSelectedBias}
            filteredBiasData={filteredBiasData}
            subCategoriesPerCategory={subCategoriesPerCategory}
            filters={filters}
            setFilters={setFilters}
            setSearchString={setSearchString}
            searchString={searchString}
          />
        </ContainerMobile>
      )}
    </>
  )
}

export default Explore
