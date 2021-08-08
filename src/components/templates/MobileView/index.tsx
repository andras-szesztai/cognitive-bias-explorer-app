import { useState } from 'react'
import useMeasure from 'react-use-measure'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

import {
  BigCard,
  SearchBar,
  TitleLogo,
  ExploreCardsContainer,
  MobileExploreMainContainer,
  MobileFiltersContainer,
  MobileFiltersButton,
} from '../../atoms'
import { FixedBigCard } from '../../atoms/BigCard/styles'
import {
  ButtonWithDropdownControls,
  SmallCardsContainerContent,
} from '../../organisms'

import { IViewProps } from '../../../types/views'

import { defaultFilters } from '../../../constants/filters'

import { durations, eases } from '../../../styles'
import { ClearButton, MainButtonsContainer } from './styles'

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
  const [containerRef, { height: fullHeight }] = useMeasure()
  const drawerHeight = height + 24
  const [isBigCardExpanded, setIsBigCardExpanded] = useState(false)

  const handleClear = () => {
    setFilters(defaultFilters)
    setSearchString('')
  }

  const isClearable = !!searchString || !!Object.values(filters).flat().length
  const maxExpandedCardHeight = fullHeight - 148

  return (
    <MobileExploreMainContainer ref={containerRef}>
      <TitleLogo isMobileOnly />
      <AnimateSharedLayout type="crossfade">
        <ExploreCardsContainer isMobileOnly>
          <BigCard
            selectedBias={selectedBias}
            filteredBiasData={filteredBiasData}
            layoutId="bigCard"
            onClick={() => setIsBigCardExpanded(true)}
          />
          <SmallCardsContainerContent
            filteredBiasData={filteredBiasData}
            setSelectedBias={setSelectedBias}
            selectedBias={selectedBias}
            searchString={searchString}
          />
        </ExploreCardsContainer>
        <AnimatePresence>
          {isBigCardExpanded && (
            <FixedBigCard
              layoutId="bigCard"
              layout
              maxHeight={maxExpandedCardHeight}
            >
              <BigCard
                selectedBias={selectedBias}
                filteredBiasData={filteredBiasData}
                onClick={() => setIsBigCardExpanded(false)}
                isExpanded
                maxExpandedCardHeight={maxExpandedCardHeight}
              />
            </FixedBigCard>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
      <MobileFiltersContainer
        initial={{ y: 300 }}
        animate={{ y: isDrawerOpen ? 0 : drawerHeight }}
        transition={{ ease: eases.easeInOutCubic, duration: durations.md }}
      >
        <MainButtonsContainer>
          <MobileFiltersButton onClick={setIsDrawerOpen} value={isDrawerOpen} />
          <AnimatePresence>
            {isClearable && (
              <ClearButton
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: durations.md } }}
                onClick={handleClear}
              >
                <span>Clear</span>
              </ClearButton>
            )}
          </AnimatePresence>
        </MainButtonsContainer>
        <div ref={ref}>
          <SearchBar
            onChange={(val) => setSearchString(val)}
            value={searchString}
            blurFromParent={false}
            withMarginBottom
          />
          <ButtonWithDropdownControls
            filters={filters}
            subCategoriesPerCategory={subCategoriesPerCategory}
            setFilters={setFilters}
            fullWidth
          />
        </div>
      </MobileFiltersContainer>
    </MobileExploreMainContainer>
  )
}

export default MobileView
