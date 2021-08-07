import { useState } from 'react'
import useMeasure from 'react-use-measure'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

import {
  BigCard,
  SearchBar,
  TitleLogo,
  CardsContainer,
  MobileMainContainer,
  MobileFiltersContainer,
  MobileFiltersButton,
} from '../../atoms'
import { FixedBigCard } from '../../atoms/BigCard/styles'
import {
  ButtonWithDropdownControls,
  SmallCardsContainerContent,
} from '../../organisms'

import { IViewProps } from '../../../types/views'

import { durations } from '../../../styles'
import { eases } from '../../../styles/animations'

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

  const maxExpandedCardHeight = fullHeight - 148
  return (
    <MobileMainContainer ref={containerRef}>
      <TitleLogo isMobileOnly />
      <AnimateSharedLayout type="crossfade">
        <CardsContainer isMobileOnly>
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
        </CardsContainer>
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
        <MobileFiltersButton onClick={setIsDrawerOpen} value={isDrawerOpen} />
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
    </MobileMainContainer>
  )
}

export default MobileView
