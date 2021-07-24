import { useEffect, useState } from 'react'

import biasData from '../../data/cognitiveBiases'

import { IBiasData, TSubCategories } from '../../types/data'

const sortedBiasData = biasData.sort((a, b) =>
  a.cognitiveBias.localeCompare(b.cognitiveBias)
)

interface IParams {
  filters: TSubCategories
}

const useMakeFilteredData = ({ filters }: IParams) => {
  const [filteredBiasData, setFilteredBiasData] = useState<IBiasData[]>([])
  useEffect(() => {
    const subCategories = Object.values(filters).flat()
    const newFilteredBiasData = sortedBiasData.filter(
      (d) => !!subCategories.includes(d.subCategory)
    )
    setFilteredBiasData(newFilteredBiasData)
  }, [filters])

  return filteredBiasData
}

export default useMakeFilteredData
