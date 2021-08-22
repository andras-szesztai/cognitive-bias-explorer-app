import { isMobileOnly } from 'react-device-detect'

import {
  DesktopTabletHomeView,
  MobileHomeView,
} from '../../components/templates'

interface IProps {
  onFirstRender: () => void
  isFirstRender: boolean
}

const Home = ({ onFirstRender, isFirstRender }: IProps) => {
  return (
    <>
      {!isMobileOnly && (
        <DesktopTabletHomeView
          isFirstRender={isFirstRender}
          onFirstRender={onFirstRender}
        />
      )}
      {isMobileOnly && <MobileHomeView isFirstRender={isFirstRender} />}
    </>
  )
}

export default Home
