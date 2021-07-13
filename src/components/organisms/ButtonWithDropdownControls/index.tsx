import { Dispatch, SetStateAction } from 'react'

import { FiltersContainer } from '../../atoms'

import { CATEGORIES_ARRAY } from '../../../constants/categories'

import { TSubCategories } from '../../../types/data'
import { ButtonWithDropdown } from '../../molecules'

interface Props {
  subCategoriesPerCategory: TSubCategories
  filters: TSubCategories
  setFilters: Dispatch<SetStateAction<TSubCategories>>
}

const ButtonWithDropdownControls = ({
  filters,
  setFilters,
  subCategoriesPerCategory,
}: Props) => {
  return (
    <FiltersContainer>
      {CATEGORIES_ARRAY.map((category) => {
        const selectedSubCategories = filters[category]
        const allSubcategories = subCategoriesPerCategory[category]
        return (
          <ButtonWithDropdown
            key={category}
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
  )
}

export default ButtonWithDropdownControls
