import { useEffect, useState } from 'react'

import { Props } from '.'

type TStatus = 'full' | 'empty'

export const useMainButtonStatus = ({
  selectedSubCategories,
  allSubCategoriesLength,
}: Pick<Props, 'selectedSubCategories' | 'allSubCategoriesLength'>) => {
  const [status, setStatus] = useState<TStatus>('full') //TODO: can come from above
  useEffect(() => {
    if (!selectedSubCategories.length && status === 'full') {
      setStatus('empty')
    }
    if (
      selectedSubCategories.length === allSubCategoriesLength &&
      status === 'empty'
    ) {
      setStatus('full')
    }
  }, [selectedSubCategories, allSubCategoriesLength, status])

  return status
}
