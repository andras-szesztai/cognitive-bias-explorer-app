import { useState } from 'react'
import useMeasure from 'react-use-measure'
import styled from '@emotion/styled'

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
import { durations } from '../../../styles'
import { eases } from '../../../styles/animations'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'

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
  const [isClicked, setIsClicked] = useState(false)

  return (
    <MobileMainContainer>
      <TitleLogo />
      <AnimateSharedLayout type="crossfade">
        <CardsContainer>
          <BigCard
            selectedBias={selectedBias}
            filteredBiasData={filteredBiasData}
            layoutId="card"
            onClick={() => setIsClicked(true)}
          />
          <SmallCardsContainerContent
            filteredBiasData={filteredBiasData}
            setSelectedBias={setSelectedBias}
            selectedBias={selectedBias}
            searchString={searchString}
          />
        </CardsContainer>
        <AnimatePresence>
          {isClicked && (
            <FixedBigCard layoutId="card">
              <BigCard
                selectedBias={selectedBias}
                filteredBiasData={filteredBiasData}
                autoHeight
                onClick={() => setIsClicked(false)}
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

const FixedBigCard = styled(motion.div)`
  position: fixed;
  top: 16px;
  left: 16px;
  width: calc(100vw - 32px);
  height: calc(100vh - 72px);

  display: grid;
`

export default MobileView
