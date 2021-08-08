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
  const randomSorted = [...biasData].sort(
    (a, b) => b.definition.length - a.definition.length
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
