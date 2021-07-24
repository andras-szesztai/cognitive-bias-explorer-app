import { Dispatch, SetStateAction } from 'react'

import { SmallCard, SmallCardsContainer } from '../../atoms'

import { IBiasData, ISelectedBiasData } from '../../../types/data'

interface IProps {
  filteredBiasData: IBiasData[]
  selectedBias: ISelectedBiasData | undefined
  setSelectedBias: Dispatch<SetStateAction<ISelectedBiasData | undefined>>
}

const SmallCardsContainerContent = ({
  filteredBiasData,
  selectedBias,
  setSelectedBias,
}: IProps) => {
  return (
    <SmallCardsContainer>
      {filteredBiasData.map((bias, index) => {
        return (
          <SmallCard
            key={bias.cognitiveBias}
            bias={bias}
            selectedBias={selectedBias}
            setSelectedBias={setSelectedBias}
            position={index + 1}
          />
        )
      })}
    </SmallCardsContainer>
  )
}

export default SmallCardsContainerContent
