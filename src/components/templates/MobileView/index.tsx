import { useState } from 'react'

import {
  BigCard,
  SearchBar,
  TitleLogo,
  CardsContainer,
  MobileMainContainer,
  MobileFiltersContainer,
  MobileFiltersButton,
} from '../../atoms'
import {
  ButtonWithDropdownControls,
  SmallCardsContainerContent,
} from '../../organisms'

import { IViewProps } from '../../../types/views'

const drawerHeight = 215

const MobileView = ({
  setSearchString,
  searchString,
  filteredBiasData,
  setSelectedBias,
  selectedBias,
  filters,
  subCategoriesPerCategory,
  setFilters,
}: IViewProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <MobileMainContainer>
      <TitleLogo />
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
      <MobileFiltersContainer
        initial={{ y: drawerHeight }}
        animate={{ y: isDrawerOpen ? 0 : drawerHeight }}
      >
        <MobileFiltersButton onClick={setIsDrawerOpen} value={isDrawerOpen} />
        <SearchBar
          onChange={(val) => setSearchString(val)}
          value={searchString}
          blurFromParent={false}
        />
        <ButtonWithDropdownControls
          filters={filters}
          subCategoriesPerCategory={subCategoriesPerCategory}
          setFilters={setFilters}
          fullWidth
        />
      </MobileFiltersContainer>
    </MobileMainContainer>
  )
}

export default MobileView
