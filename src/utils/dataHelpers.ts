import { random, uniq } from 'lodash'

import { TSubCategories } from '../types/data'

import biasData from '../data/cognitiveBiases'

export const getSubcategoriesPerCategory = () =>
  biasData.reduce((acc, bias) => {
    if (bias.category in acc) {
      if (!acc[bias.category].includes(bias.subCategory)) {
        return {
          ...acc,
          [bias.category]: [...acc[bias.category], bias.subCategory],
        }
      }
      return acc
    } else {
      return { ...acc, [bias.category]: [bias.subCategory] }
    }
  }, {} as TSubCategories)

export const getDailyBias = () => {
  //"Sunk Cost Fallacy" 161
  const randomSorted = [...biasData].sort(
    (a, b) => a.definition.length - b.definition.length
  )

  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0).getTime()
  const diff = now.getTime() - start
  const oneDay = 1000 * 60 * 60 * 24
  const day = Math.floor(diff / oneDay)
  const biasIndex =
    Math.floor(day / 2) > biasData.length
      ? Math.floor(day / 3)
      : Math.floor(day / 2)

  return randomSorted[biasIndex]
}

export const getRandomQuestionAnswers = () => {
  const questionIndex = random(0, biasData.length)

  const questionBias = biasData[questionIndex]

  const randomArray = uniq(
    Array.from(
      { length: biasData.length },
      () => biasData[random(0, biasData.length)]?.cognitiveBias
    )
  ).filter(Boolean)

  const randomPosition = random(0, 3)
  randomArray[randomPosition] = questionBias.cognitiveBias
  const answers = randomArray.slice(0, 4)

  return {
    correct: questionBias.cognitiveBias,
    question: questionBias.definition,
    answers,
  }
}
