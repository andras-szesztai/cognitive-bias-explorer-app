import {
  WHAT_DO_WE_REMEMBER,
  NOT_ENOUGH_MEANING,
  TOO_MUCH_INFORMATION,
  NEED_TO_ACT_FAST,
} from '../constants/categories'

export type TCategories =
  | typeof WHAT_DO_WE_REMEMBER
  | typeof NEED_TO_ACT_FAST
  | typeof NOT_ENOUGH_MEANING
  | typeof TOO_MUCH_INFORMATION

export interface IBiasData {
  category: TCategories
  subCategory: string
  cognitiveBias: string
  definition: string
  toLink: string //TODO update to number
}

export type TSubCategories = Record<TCategories, string[]>
