import { css } from '@emotion/css'
import { useEffect, useState } from 'react'

import {
  MainContainer,
  TitleLogo,
  ContentContainer,
  SearchCardsContainer,
  CardsContainer,
  SmallCardsContainer,
  SmallCard,
} from './components/atoms'
import { ButtonWithDropdownControls } from './components/organisms'

import { getSubcategoriesPerCategory } from './utils/dataHelpers'

import biasData from './data/cognitiveBiases'

import { IBiasData } from './types/data'
import useEventListener from '@use-it/event-listener'
import { kebabCase } from 'lodash'

const subCategoriesPerCategory = getSubcategoriesPerCategory()

const sortedBiasData = biasData.sort((a, b) =>
  a.cognitiveBias.localeCompare(b.cognitiveBias)
)

export interface ISelectedBiasData extends IBiasData {
  position: number
}

function App() {
  const [filters, setFilters] = useState(subCategoriesPerCategory)
  const [searchString, setSearchString] = useState('')
  const [selectedBias, setSelectedBias] = useState<
    ISelectedBiasData | undefined
  >(undefined)
  const [filteredBiasData, setFilteredBiasData] = useState<IBiasData[]>([])
  useEffect(() => {
    const subCategories = Object.values(filters).flat()
    const newFilteredBiasData = sortedBiasData.filter(
      (d) => !!subCategories.includes(d.subCategory)
    )
    setFilteredBiasData(newFilteredBiasData)
  }, [filters])

  useEffect(() => {
    if (!!selectedBias) {
      document
        ?.getElementById(kebabCase(selectedBias.cognitiveBias))
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [selectedBias])

  useEventListener('keydown', (event: KeyboardEvent) => {
    const first = { ...filteredBiasData[0], position: 1 }
    const selectedNotInView = !filteredBiasData.find(
      (d) => selectedBias && d.cognitiveBias === selectedBias.cognitiveBias
    )
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
        if (selectedBias.position % 3) {
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
  })

  return (
    <div className={style}>
      <MainContainer>
        <TitleLogo />
        <ContentContainer>
          <ButtonWithDropdownControls
            filters={filters}
            subCategoriesPerCategory={subCategoriesPerCategory}
            setFilters={setFilters}
          />
          <SearchCardsContainer>
            <div>Search</div>
            <CardsContainer>
              {/* // TODO make it organism */}
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
              <div>{selectedBias?.definition}</div>
            </CardsContainer>
          </SearchCardsContainer>
        </ContentContainer>
      </MainContainer>
    </div>
  )
}

const style = css`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  position: relative;
`

export default App
