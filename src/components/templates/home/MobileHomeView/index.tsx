import { homeCardsShared } from '../../../../constants/homeCards'
import {
  HomeBigCard,
  MobileHomeContentContainer,
  MobileMainContainer,
  TitleLogo,
} from '../../../atoms'

const MobileHomeView = () => {
  return (
    <MobileMainContainer>
      <TitleLogo isMobileOnly />
      <MobileHomeContentContainer>
        {Object.values(homeCardsShared).map((card) => (
          <HomeBigCard key={card.color} {...card} noMaxHeight />
        ))}
      </MobileHomeContentContainer>
    </MobileMainContainer>
  )
}

export default MobileHomeView
