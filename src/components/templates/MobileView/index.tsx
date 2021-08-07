import {
  BigCard,
  SearchBar,
  TitleLogo,
  CardsContainer,
  ContentContainer,
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
  return (
    <MobileMainContainer>
      <TitleLogo />
      <ContentContainer>
        <SearchBar
          onChange={(val) => setSearchString(val)}
          value={searchString}
          blurFromParent={false}
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
      </ContentContainer>
      <MobileFiltersContainer>
        <MobileFiltersButton />
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
