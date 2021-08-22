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
          <HomeBigCard key={card.colorLight} {...card} noMaxHeight />
        ))}
        <div style={{ height: 8 }} />
      </MobileHomeContentContainer>
    </MobileMainContainer>
  )
}

export default MobileHomeView
