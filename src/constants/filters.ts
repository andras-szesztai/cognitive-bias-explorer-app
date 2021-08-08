import {
  WHAT_DO_WE_REMEMBER,
  NEED_TO_ACT_FAST,
  NOT_ENOUGH_MEANING,
  TOO_MUCH_INFORMATION,
} from './categories'

export const defaultFilters = {
  [WHAT_DO_WE_REMEMBER]: [] as string[],
  [NEED_TO_ACT_FAST]: [] as string[],
  [NOT_ENOUGH_MEANING]: [] as string[],
  [TOO_MUCH_INFORMATION]: [] as string[],
}
