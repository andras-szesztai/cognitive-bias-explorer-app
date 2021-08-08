import { isMobileOnly } from 'react-device-detect'

import { DesktopTabletQuizView } from '../../components/templates'

import { Container } from './styles'

const Quiz = () => {
  return <Container>{!isMobileOnly && <DesktopTabletQuizView />}</Container>
}

export default Quiz
