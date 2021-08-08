import { Dispatch, SetStateAction } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styled from '@emotion/styled'

import { SmallCard, SmallCardsContainer } from '../../atoms'

import { IBiasData, ISelectedBiasData } from '../../../types/data'

import { colors } from '../../../styles'

interface IProps {
  filteredBiasData: IBiasData[]
  selectedBias: ISelectedBiasData | undefined
  setSelectedBias: Dispatch<SetStateAction<ISelectedBiasData | undefined>>
  searchString: string
}

const SmallCardsContainerContent = ({
  filteredBiasData,
  selectedBias,
  setSelectedBias,
  searchString,
}: IProps) => {
  return (
    <SmallCardsContainer justifyStart={filteredBiasData.length === 2}>
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
      <AnimatePresence>
        {!filteredBiasData.length && (
          <MessageContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Sorry, there is no result{' '}
            {searchString ? `for "${searchString}"` : ''} with your current
            filter selection
          </MessageContainer>
        )}
      </AnimatePresence>
    </SmallCardsContainer>
  )
}

const MessageContainer = styled(motion.div)`
  grid-column: 1 / -1;
  color: ${colors.darkGray};
`

export default SmallCardsContainerContent
