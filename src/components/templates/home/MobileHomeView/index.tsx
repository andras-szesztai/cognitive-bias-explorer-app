import { homeCardsShared } from '../../../../constants/homeCards'
import {
  HomeBigCard,
  MobileHomeContentContainer,
  MobileMainContainer,
  TitleLogo,
} from '../../../atoms'

const MobileHomeView = ({ isFirstRender }: { isFirstRender: boolean }) => {
  return (
    <MobileMainContainer>
      <TitleLogo isMobileOnly />
      <MobileHomeContentContainer>
        {Object.values(homeCardsShared).map((card) => (
          <HomeBigCard
            key={card.colorLight}
            {...card}
            isFirstRender={isFirstRender}
            noMaxHeight
          />
        ))}
        <div style={{ height: 8 }} />
      </MobileHomeContentContainer>
    </MobileMainContainer>
  )
}

export default MobileHomeView
