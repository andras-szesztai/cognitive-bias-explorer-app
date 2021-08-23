import { isSafari, isMobileSafari, isTablet } from 'react-device-detect'

import {
  ExplorerBigCard,
  ExploreCardsContainer,
  DesktopExploreContentContainer,
  SearchBar,
  ExploreSearchCardsContainer,
  DesktopMainContainer,
} from '../../../atoms'
import {
  ButtonWithDropdownControls,
  SmallCardsContainerContent,
} from '../../../organisms'

import { useKeyboardNavigation } from '../../../../hooks'

import { IViewProps } from '../../../../types/views'

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
    <DesktopMainContainer>
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
          <ExploreCardsContainer
            isSafari={(isSafari && !isMobileSafari) || isTablet}
          >
            <ExplorerBigCard
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
    </DesktopMainContainer>
  )
}

export default DesktopTabletView
