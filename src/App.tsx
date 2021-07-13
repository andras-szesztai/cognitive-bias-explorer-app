import { css } from '@emotion/css'
import { useState } from 'react'

import {
  MainContainer,
  TitleLogo,
  ContentContainer,
  SearchCardsContainer,
  CardsContainer,
  SmallCardsContainer,
  SmallCard,
} from './components/atoms'
import { ButtonWithDropdownControls } from './components/organisms'

import { getSubcategoriesPerCategory } from './utils/dataHelpers'

import biasData from './data/cognitiveBiases'

const subCategoriesPerCategory = getSubcategoriesPerCategory()

// TODO make it work on the main cards part
// const [focusedOption, setFocusedOption] = useState(0)
// useEventListener('keydown', (event: KeyboardEvent) => {
//   if (isSecondaryClicked) {
//     if (event.key === 'ArrowDown' || event.key === 's') {
//       setFocusedOption((prev) =>
//         prev < allSubCategories.length - 1 ? ++prev : prev
//       )
//     }
//     if (event.key === 'ArrowUp' || event.key === 'w') {
//       setFocusedOption((prev) => (prev > 0 ? --prev : prev))
//     }
//   }
// })

function App() {
  const [filters, setFilters] = useState(subCategoriesPerCategory) //TODO also from local storage

  return (
    <div className={style}>
      <MainContainer>
        <TitleLogo />
        <ContentContainer>
          <ButtonWithDropdownControls
            filters={filters}
            subCategoriesPerCategory={subCategoriesPerCategory}
            setFilters={setFilters}
          />
          <SearchCardsContainer>
            <div>Search</div>
            <CardsContainer>
              {/* // TODO make it organism */}
              <SmallCardsContainer>
                {biasData.map((bias) => {
                  return <SmallCard bias={bias} />
                })}
              </SmallCardsContainer>
            </CardsContainer>
          </SearchCardsContainer>
        </ContentContainer>
      </MainContainer>
    </div>
  )
}

const style = css`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  position: relative;
`

export default App
