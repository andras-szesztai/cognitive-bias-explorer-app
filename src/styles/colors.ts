import {
  NEED_TO_ACT_FAST,
  NOT_ENOUGH_MEANING,
  TOO_MUCH_INFORMATION,
  WHAT_DO_WE_REMEMBER,
} from '../constants/categories'
import { TCategories } from '../types/data'

const colors = {
  blue: '#1A94FF',
  blueLight: '#70BCFF',
  blueOpaque: 'rgba(26, 148, 255, .15)',
  yellow: '#FCAB10',
  yellowLight: '#FDC55D',
  yellowOpaque: 'rgba(252, 171, 16, 0.2)',
  green: '#17CF9E',
  greenLight: '#24E5B2',
  greenOpaque: 'rgba(6, 214, 160, .15)',
  pink: '#FF3363',
  pinkLight: '#FF7092',
  pinkOpaque: 'rgba(255, 51, 99, 0.15)',
  darkGray: '#1F1F1F',
  lightGray: '#e9e9e9',
  darkGrayOpaque: 'rgba(31, 31, 31, .15)',
  white: '#FFF',
}

export type TMainColors = 'blue' | 'yellow' | 'green' | 'pink'

export const categoryColors: Record<TCategories, string> = {
  [WHAT_DO_WE_REMEMBER]: colors.blue,
  [NEED_TO_ACT_FAST]: colors.yellow,
  [NOT_ENOUGH_MEANING]: colors.green,
  [TOO_MUCH_INFORMATION]: colors.pink,
}

export const categoryLightColors: Record<TCategories, string> = {
  [WHAT_DO_WE_REMEMBER]: colors.blueLight,
  [NEED_TO_ACT_FAST]: colors.yellowLight,
  [NOT_ENOUGH_MEANING]: colors.greenLight,
  [TOO_MUCH_INFORMATION]: colors.pinkLight,
}

export default colors
