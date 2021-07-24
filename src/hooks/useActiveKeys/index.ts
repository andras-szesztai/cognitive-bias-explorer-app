import { useEffect, useState } from 'react'

import { IBiasData, ISelectedBiasData } from '../../types/data'

interface IParams {
  selectedBias: ISelectedBiasData | undefined
  filteredBiasData: IBiasData[]
}

const useActiveKeys = ({ filteredBiasData, selectedBias }: IParams) => {
  const [activeKeys, setActiveKeys] = useState({
    top: true,
    left: true,
    bottom: true,
    right: true,
  })

  useEffect(() => {
    setActiveKeys(() => {
      const isInView = !!filteredBiasData.find(
        (d) => d.cognitiveBias === selectedBias?.cognitiveBias
      )
      if (!isInView || !selectedBias) {
        return { top: true, left: true, bottom: true, right: true }
      } else {
        const position = selectedBias?.position
        return {
          top: position - 3 > 0,
          bottom: position + 3 <= filteredBiasData.length,
          left: !!((position - 1) % 3),
          right: !!(position % 3) && position + 1 <= filteredBiasData.length,
        }
      }
    })
  }, [selectedBias, filteredBiasData])

  return activeKeys
}

export default useActiveKeys
