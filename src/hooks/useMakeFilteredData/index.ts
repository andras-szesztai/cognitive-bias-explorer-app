import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce/lib'

import usePrevious from '../usePrevious'

import biasData from '../../data/cognitiveBiases'

import { IBiasData, ISelectedBiasData, TSubCategories } from '../../types/data'

const sortedBiasData = biasData.sort((a, b) =>
  a.cognitiveBias.localeCompare(b.cognitiveBias)
)

interface IParams {
  filters: TSubCategories
  searchString: string
  selectedBias: ISelectedBiasData | undefined
  setSelectedBias: Dispatch<SetStateAction<ISelectedBiasData | undefined>>
}

const useMakeFilteredData = ({
  filters,
  searchString,
  selectedBias,
  setSelectedBias,
}: IParams) => {
  const [filteredBiasData, setFilteredBiasData] = useState<IBiasData[]>([])
  const [debouncedSearchString] = useDebounce(searchString, 300)

  useEffect(() => {
    const subCategories = Object.values(filters).flat()
    let newFilteredBiasData
    if (!subCategories.length) {
      newFilteredBiasData = sortedBiasData
    } else {
      newFilteredBiasData = sortedBiasData.filter(
        (d) =>
          !!subCategories.includes(d.subCategory) &&
          (!debouncedSearchString ||
            d.cognitiveBias
              .toLowerCase()
              .includes(debouncedSearchString.toLowerCase()))
      )
    }
    setFilteredBiasData(newFilteredBiasData)
  }, [filters, debouncedSearchString])

  // Updates position key in selectedBias if filteredBiasData is updated
  const prevFilteredBiasData = usePrevious(filteredBiasData)
  useEffect(() => {
    if (
      selectedBias &&
      prevFilteredBiasData?.length !== filteredBiasData.length
    ) {
      setSelectedBias({
        ...selectedBias,
        position:
          filteredBiasData.findIndex(
            (d) => d.cognitiveBias === selectedBias.cognitiveBias
          ) + 1,
      })
    }
  }, [filteredBiasData, selectedBias, prevFilteredBiasData, setSelectedBias])

  return filteredBiasData
}

export default useMakeFilteredData
