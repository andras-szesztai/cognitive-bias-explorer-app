import {
  BigCard,
  SearchBar,
  TitleLogo,
  CardsContainer,
  ContentContainer,
  MobileMainContainer,
} from '../../atoms'
import { SmallCardsContainerContent } from '../../organisms'

import { IViewProps } from '../../../types/views'

const MobileView = ({
  setSearchString,
  searchString,
  filteredBiasData,
  setSelectedBias,
  selectedBias,
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
    </MobileMainContainer>
  )
}

export default MobileView
