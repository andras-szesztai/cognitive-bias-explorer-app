import { useDidMount } from 'rooks'

import { homeCardsDesktop } from '../../../../constants/homeCards'

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
  useDidMount(onFirstRender)

  return (
    <DesktopMainContainer>
      <DesktopHomeContentContainer>
        {homeCardsDesktop.map((card) => (
          <HomeBigCard
            key={card.color}
            {...card}
            isFirstRender={isFirstRender}
          />
        ))}
      </DesktopHomeContentContainer>
    </DesktopMainContainer>
  )
}

export default DesktopTabletHomeView
