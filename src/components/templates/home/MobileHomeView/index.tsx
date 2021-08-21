import { MobileMainContainer, TitleLogo } from '../../../atoms'

interface IProps {
  onFirstRender: () => void
  isFirstRender: boolean
}

const MobileHomeView = ({ onFirstRender, isFirstRender }: IProps) => {
  return (
    <MobileMainContainer>
      <TitleLogo isMobileOnly />
    </MobileMainContainer>
  )
}

export default MobileHomeView
