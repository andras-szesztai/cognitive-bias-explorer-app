import { Dispatch, SetStateAction } from 'react'

import { IBiasData, ISelectedBiasData, TSubCategories } from './data'

export interface IViewProps {
  selectedBias: ISelectedBiasData | undefined
  setSelectedBias: Dispatch<SetStateAction<ISelectedBiasData | undefined>>
  filteredBiasData: IBiasData[]
  subCategoriesPerCategory: TSubCategories
  filters: TSubCategories
  setFilters: Dispatch<SetStateAction<TSubCategories>>
  searchString: string
  setSearchString: React.Dispatch<React.SetStateAction<string>>
}
