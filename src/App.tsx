import { css } from '@emotion/css'
import styled from '@emotion/styled'
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

  console.log(new Array(10).fill(''))
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
            <Container>Search</Container>
            <CardsContainer>
              <SmallCardsContainer>
                {new Array(100).fill('').map(() => {
                  return <SmallCard />
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

// TODO remove
const Container = styled.div`
  background: rgba(0, 0, 0, 0.2);
  place-self: stretch;
  display: grid;
  place-items: center;
`

export default App
