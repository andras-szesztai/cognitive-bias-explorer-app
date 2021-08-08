import { Dispatch, SetStateAction } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styled from '@emotion/styled'

import { SmallCard, ExploreSmallCardsContainer } from '../../atoms'

import { IBiasData, ISelectedBiasData } from '../../../types/data'

import { colors } from '../../../styles'

interface IProps {
  filteredBiasData: IBiasData[]
  selectedBias: ISelectedBiasData | undefined
  setSelectedBias: Dispatch<SetStateAction<ISelectedBiasData | undefined>>
  searchString: string
  isFiltered: boolean
}

const SmallCardsContainerContent = ({
  filteredBiasData,
  selectedBias,
  setSelectedBias,
  searchString,
  isFiltered,
}: IProps) => {
  return (
    <ExploreSmallCardsContainer justifyStart={filteredBiasData.length === 2}>
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
        {!filteredBiasData.length && isFiltered && (
          <MessageContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Sorry, there is no result{' '}
            {searchString ? `for "${searchString}"` : ''} with your current
            filter selection
          </MessageContainer>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!filteredBiasData.length && !isFiltered && (
          <LoadingOverLay initial={{ opacity: 1 }} exit={{ opacity: 0 }} />
        )}
      </AnimatePresence>
    </ExploreSmallCardsContainer>
  )
}

const MessageContainer = styled(motion.div)`
  grid-column: 1 / -1;
  color: ${colors.darkGray};
`
const LoadingOverLay = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${colors.white};
`

export default SmallCardsContainerContent
