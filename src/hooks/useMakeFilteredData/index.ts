import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce/lib'
import { isNull } from 'lodash'
import { usePrevious } from 'rooks'

import { sortedBiasData } from '../../data/cognitiveBiases'

import { IBiasData, ISelectedBiasData, TSubCategories } from '../../types/data'

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
  const [filteredBiasData, setFilteredBiasData] =
    useState<IBiasData[]>(sortedBiasData)
  const [debouncedSearchString] = useDebounce(searchString, 300)
  const prevDebouncedSearchString = usePrevious(debouncedSearchString)
  const stringifiedFilters = JSON.stringify(filters)
  const prevStringifiedFilters = usePrevious(stringifiedFilters)

  useEffect(() => {
    if (
      (!isNull(prevStringifiedFilters) &&
        prevStringifiedFilters !== stringifiedFilters) ||
      (!isNull(prevDebouncedSearchString) &&
        prevDebouncedSearchString !== debouncedSearchString)
    ) {
      const subCategories = Object.values(filters).flat()
      const newFilteredBiasData = sortedBiasData.filter((d) => {
        let isInSub = true
        let isInSearch = true
        if (subCategories.length) {
          isInSub = !!subCategories.includes(d.subCategory)
        }
        if (debouncedSearchString) {
          isInSearch = d.cognitiveBias
            .toLowerCase()
            .includes(debouncedSearchString.toLowerCase())
        }
        return isInSub && isInSearch
      })
      setFilteredBiasData(newFilteredBiasData)
    }
  }, [
    filters,
    debouncedSearchString,
    prevDebouncedSearchString,
    prevStringifiedFilters,
    stringifiedFilters,
  ])

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
