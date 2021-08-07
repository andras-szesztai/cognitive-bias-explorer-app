import { TitleLogo } from '../../atoms'
import { MobileMainContainer } from '../../atoms/containers'

import { IViewProps } from '../../../types/views'

const MobileView = (props: IViewProps) => {
  return (
    <MobileMainContainer>
      <TitleLogo />
    </MobileMainContainer>
  )
}

export default MobileView
