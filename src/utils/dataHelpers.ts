import { isUndefined, random, uniq } from 'lodash'

import { TSubCategories } from '../types/data'

import { data } from '../data/cognitiveBiases'

export const getSubcategoriesPerCategory = () =>
  data.reduce((acc, bias) => {
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

export const getRandomBias = () => {
  return data[random(0, data.length)]
}

export const getRandomQuestionAnswers = () => {
  const questionIndex = random(0, data.length)

  const questionBias = data[questionIndex]

  const randomArray = uniq(
    Array.from(
      { length: data.length },
      () => data[random(0, data.length)]?.cognitiveBias
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

export const getRandomQuizIndexes = (
  base: number,
  length: number,
  filterOut?: number
) =>
  uniq([...new Array(base)].map(() => random(0, data.length)))
    .filter((n) => (!isUndefined(filterOut) ? n !== filterOut : true))
    .slice(0, length)
