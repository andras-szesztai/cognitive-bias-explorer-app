import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce/lib'

import biasData from '../../data/cognitiveBiases'

import { IBiasData, TSubCategories } from '../../types/data'

const sortedBiasData = biasData.sort((a, b) =>
  a.cognitiveBias.localeCompare(b.cognitiveBias)
)

interface IParams {
  filters: TSubCategories
  searchString: string
}

const useMakeFilteredData = ({ filters, searchString }: IParams) => {
  const [filteredBiasData, setFilteredBiasData] = useState<IBiasData[]>([])
  const [debouncedSearchString] = useDebounce(searchString, 300)

  useEffect(() => {
    const subCategories = Object.values(filters).flat()
    const newFilteredBiasData = sortedBiasData.filter(
      (d) =>
        !!subCategories.includes(d.subCategory) &&
        (!debouncedSearchString ||
          d.cognitiveBias
            .toLowerCase()
            .includes(debouncedSearchString.toLowerCase()))
    )
    setFilteredBiasData(newFilteredBiasData)
  }, [filters, debouncedSearchString])

  return filteredBiasData
}

export default useMakeFilteredData
