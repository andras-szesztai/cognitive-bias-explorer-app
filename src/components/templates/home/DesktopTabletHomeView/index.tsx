import { homeCardsDesktop } from '../../../../constants/homeCards'

import { colors } from '../../../../styles'

import {
  DesktopMainContainer,
  DesktopHomeContentContainer,
  HomeBigCard,
} from '../../../atoms'

interface IProps {
  onFirstRender: () => void
  isFirstRender: boolean
}

const DesktopTabletHomeView = ({ onFirstRender, isFirstRender }: IProps) => {
  return (
    <DesktopMainContainer>
      <DesktopHomeContentContainer>
        {homeCardsDesktop.map((card) => (
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
    </DesktopMainContainer>
  )
}

export default DesktopTabletHomeView
