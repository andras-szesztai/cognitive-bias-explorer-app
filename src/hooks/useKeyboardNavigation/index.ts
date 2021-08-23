import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import useEventListener from '@use-it/event-listener'
import { kebabCase } from 'lodash'
import { isMobile } from 'react-device-detect'

import { IBiasData, ISelectedBiasData } from '../../types/data'

interface IParams {
  selectedBias: ISelectedBiasData | undefined
  setSelectedBias: Dispatch<SetStateAction<ISelectedBiasData | undefined>>
  filteredBiasData: IBiasData[]
}

const useKeyboardNavigation = ({
  selectedBias,
  setSelectedBias,
  filteredBiasData,
}: IParams): [boolean, Dispatch<SetStateAction<boolean>>] => {
  useEffect(() => {
    if (!!selectedBias && !isMobile) {
      document
        ?.getElementById(kebabCase(selectedBias.cognitiveBias))
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [selectedBias])

  const [isEnabled, setIsEnabled] = useState(true)

  useEventListener('keydown', (event: KeyboardEvent) => {
    if (!isMobile) {
      const first = { ...filteredBiasData[0], position: 1 }
      const selectedNotInView = !filteredBiasData.find(
        (d) => selectedBias && d.cognitiveBias === selectedBias.cognitiveBias
      )
      if (isEnabled) {
        if (event.key === 'ArrowDown' || event.key === 's') {
          if (!selectedBias || selectedNotInView) {
            setSelectedBias(first)
          } else {
            if (selectedBias.position + 3 <= filteredBiasData.length) {
              const newIndex = selectedBias.position + 2
              setSelectedBias({
                ...filteredBiasData[newIndex],
                position: newIndex + 1,
              })
            }
          }
        }
        if (event.key === 'ArrowUp' || event.key === 'w') {
          if (!selectedBias || selectedNotInView) {
            setSelectedBias(first)
          } else {
            if (selectedBias.position - 3 > 0) {
              const newIndex = selectedBias.position - 4
              setSelectedBias({
                ...filteredBiasData[newIndex],
                position: newIndex + 1,
              })
            }
          }
        }
        if (event.key === 'ArrowRight' || event.key === 'd') {
          if (!selectedBias || selectedNotInView) {
            setSelectedBias(first)
          } else {
            if (
              selectedBias.position % 3 &&
              selectedBias.position + 1 <= filteredBiasData.length
            ) {
              const newIndex = selectedBias.position
              setSelectedBias({
                ...filteredBiasData[newIndex],
                position: newIndex + 1,
              })
            }
          }
        }
        if (event.key === 'ArrowLeft' || event.key === 'a') {
          if (!selectedBias || selectedNotInView) {
            setSelectedBias(first)
          } else {
            if ((selectedBias.position - 1) % 3) {
              const newIndex = selectedBias.position - 2
              setSelectedBias({
                ...filteredBiasData[newIndex],
                position: newIndex + 1,
              })
            }
          }
        }
      }
      if (!isEnabled) {
        if (
          event.key === 'Enter' ||
          event.key === 'Escape' ||
          event.key === 'ArrowDown' ||
          event.key === 'ArrowUp' ||
          event.key === 'ArrowRight' ||
          event.key === 'ArrowLeft'
        ) {
          setIsEnabled(true)
          if (!selectedBias || selectedNotInView) {
            setSelectedBias(first)
          }
        }
      }
    }
  })

  return [isEnabled, setIsEnabled]
}

export default useKeyboardNavigation
