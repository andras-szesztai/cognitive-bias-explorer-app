import { isSafari, isMobileSafari } from 'react-device-detect'

import {
  BigCard,
  ExploreCardsContainer,
  DesktopExploreContentContainer,
  SearchBar,
  ExploreSearchCardsContainer,
  DesktopExploreMainContainer,
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

  const isFiltered = !!Object.values(filters).flat().length || !!searchString

  return (
    <DesktopExploreMainContainer>
      <DesktopExploreContentContainer>
        <ButtonWithDropdownControls
          filters={filters}
          subCategoriesPerCategory={subCategoriesPerCategory}
          setFilters={setFilters}
        />
        <ExploreSearchCardsContainer>
          <SearchBar
            onFocus={() => setKeyboardNavigationIsEnabled(false)}
            onBlur={() => setKeyboardNavigationIsEnabled(true)}
            blurFromParent={keyboardNavigationIsEnabled}
            onChange={(val) => setSearchString(val)}
            value={searchString}
          />
          <ExploreCardsContainer isSafari={isSafari && !isMobileSafari}>
            <BigCard
              selectedBias={selectedBias}
              filteredBiasData={filteredBiasData}
            />
            <SmallCardsContainerContent
              filteredBiasData={filteredBiasData}
              setSelectedBias={setSelectedBias}
              selectedBias={selectedBias}
              searchString={searchString}
              isFiltered={isFiltered}
            />
          </ExploreCardsContainer>
        </ExploreSearchCardsContainer>
      </DesktopExploreContentContainer>
    </DesktopExploreMainContainer>
  )
}

export default DesktopTabletView
