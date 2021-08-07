import { Dispatch, SetStateAction } from 'react'
import useMeasure from 'react-use-measure'

import { FiltersContainer } from '../../atoms'

import { CATEGORIES_ARRAY } from '../../../constants/categories'

import { TSubCategories } from '../../../types/data'
import { ButtonWithDropdown } from '../../molecules'

interface Props {
  subCategoriesPerCategory: TSubCategories
  filters: TSubCategories
  setFilters: Dispatch<SetStateAction<TSubCategories>>
  fullWidth?: boolean
}

const ButtonWithDropdownControls = ({
  filters,
  setFilters,
  subCategoriesPerCategory,
  fullWidth,
}: Props) => {
  const [ref, { width }] = useMeasure()
  return (
    <FiltersContainer ref={ref}>
      {CATEGORIES_ARRAY.map((category, index) => {
        const selectedSubCategories = filters[category]
        const allSubcategories = subCategoriesPerCategory[category]
        return (
          <ButtonWithDropdown
            key={category}
            zIndexAdjust={index + 1}
            parentWidth={fullWidth ? width : 0}
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
