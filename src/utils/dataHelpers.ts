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
