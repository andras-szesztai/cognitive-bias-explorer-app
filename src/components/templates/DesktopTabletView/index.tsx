import {
  BigCard,
  CardsContainer,
  ContentContainer,
  SearchBar,
  SearchCardsContainer,
  TitleLogo,
  MainContainer,
} from '../../atoms'
import {
  ButtonWithDropdownControls,
  SmallCardsContainerContent,
} from '../../organisms'

import { useKeyboardNavigation } from '../../../hooks'

import { IViewProps } from '../../../types/views'

const DesktopTabletView = ({
  selectedBias,
  setSelectedBias,
  filteredBiasData,
  subCategoriesPerCategory,
  filters,
  setFilters,
  setSearchString,
  searchString,
}: IViewProps) => {
  const [keyboardNavigationIsEnabled, setKeyboardNavigationIsEnabled] =
    useKeyboardNavigation({
      selectedBias,
      setSelectedBias,
      filteredBiasData,
    })

  return (
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
  )
}

export default DesktopTabletView
