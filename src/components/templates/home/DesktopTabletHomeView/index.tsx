import homeCards from '../../../../constants/homeCards'

import { colors } from '../../../../styles'

import {
  DesktopExploreMainContainer,
  DesktopHomeContentContainer,
  HomeBigCard,
} from '../../../atoms'

interface IProps {
  onFirstRender: () => void
  isFirstRender: boolean
}

const DesktopTabletHomeView = ({ onFirstRender, isFirstRender }: IProps) => {
  return (
    <DesktopExploreMainContainer>
      <DesktopHomeContentContainer>
        {homeCards.map((card) => (
          <HomeBigCard
            key={card.color}
            {...card}
            isFirstRender={isFirstRender}
            onFirstRender={
              !!(card.color === colors.greenLight) && onFirstRender
            }
          />
        ))}
      </DesktopHomeContentContainer>
    </DesktopExploreMainContainer>
  )
}

export default DesktopTabletHomeView
