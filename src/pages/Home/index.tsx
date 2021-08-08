import { isMobileOnly } from 'react-device-detect'

import { DesktopTabletHomeView } from '../../components/templates'

import { Container } from './styles'

interface IProps {
  onFirstRender: () => void
  isFirstRender: boolean
}

const Home = ({ onFirstRender, isFirstRender }: IProps) => {
  return (
    <Container>
      {!isMobileOnly && (
        <DesktopTabletHomeView
          isFirstRender={isFirstRender}
          onFirstRender={onFirstRender}
        />
      )}
    </Container>
  )
}

export default Home
