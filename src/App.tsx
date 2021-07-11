import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { useState } from 'react'

import {
  MainContainer,
  TitleLogo,
  ContentContainer,
  SearchCardsContainer,
  FiltersContainer,
} from './components/atoms'
import { ButtonWithDropdown } from './components/molecules'

import { getSubcategoriesPerCategory } from './utils/dataHelpers'

import { CATEGORIES_ARRAY } from './constants/categories'

const subCategoriesPerCategory = getSubcategoriesPerCategory()

function App() {
  const [filters, setFilters] = useState(subCategoriesPerCategory) //TODO also from local storage

  return (
    <div className={style}>
      <MainContainer>
        <TitleLogo />
        <ContentContainer>
          {/* TODO move it to organisms */}
          <FiltersContainer>
            {CATEGORIES_ARRAY.map((category) => {
              const selectedSubCategories = filters[category]
              const allSubcategories = subCategoriesPerCategory[category]
              return (
                <ButtonWithDropdown
                  category={category}
                  selectedSubCategories={selectedSubCategories}
                  allSubCategories={allSubcategories}
                  onMainClick={() => {
                    setFilters((prev) => ({
                      ...prev,
                      [category]: !selectedSubCategories.length
                        ? allSubcategories
                        : [],
                    }))
                  }}
                  onCheckboxClick={(subCategory) => {
                    setFilters((prev) => {
                      let newArray
                      if (selectedSubCategories.includes(subCategory)) {
                        newArray = selectedSubCategories.filter(
                          (subC) => subC !== subCategory
                        )
                      } else {
                        newArray = [...selectedSubCategories, subCategory]
                      }
                      return {
                        ...prev,
                        [category]: newArray,
                      }
                    })
                  }}
                />
              )
            })}
          </FiltersContainer>
          <SearchCardsContainer>
            <Container>Search</Container>
            <Container />
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
