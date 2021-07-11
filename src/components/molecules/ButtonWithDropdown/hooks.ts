import { useEffect, useState } from 'react'

import { Props } from '.'

type TStatus = 'full' | 'empty'

export const useMainButtonStatus = ({
  selectedSubCategories,
  allSubCategories,
}: Pick<Props, 'selectedSubCategories' | 'allSubCategories'>) => {
  const [status, setStatus] = useState<TStatus>('full') //TODO: can come from above
  useEffect(() => {
    if (!selectedSubCategories.length && status === 'full') {
      setStatus('empty')
    }
    if (
      selectedSubCategories.length === allSubCategories.length &&
      status === 'empty'
    ) {
      setStatus('full')
    }
  }, [selectedSubCategories, allSubCategories, status])

  return status
}
