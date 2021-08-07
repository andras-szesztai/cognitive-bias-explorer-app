import { useState } from 'react'
import useMeasure from 'react-use-measure'

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
  const [ref, { height }] = useMeasure()
  const drawerHeight = height + 24

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
        <div ref={ref}>
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
        </div>
      </MobileFiltersContainer>
    </MobileMainContainer>
  )
}

export default MobileView
