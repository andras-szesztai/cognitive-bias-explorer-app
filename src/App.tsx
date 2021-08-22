import { useState } from 'react'
import { isMobileOnly } from 'react-device-detect'
import { Switch, Route } from 'react-router-dom'

import { MainContentContainer } from './components/atoms'
import { DesktopTabletNavbar, MobileNavbar } from './components/molecules'
import { Explore, Home, Quiz } from './pages'

function App() {
  const [isFirstRender, setIsFirstRender] = useState(true)

  return (
    <MainContentContainer>
      {!isMobileOnly && <DesktopTabletNavbar />}
      <Switch>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/explorer">
          <Explore />
        </Route>
        <Route path="/">
          <Home
            onFirstRender={() => setIsFirstRender(false)}
            isFirstRender={isFirstRender}
          />
        </Route>
      </Switch>
      {isMobileOnly && <MobileNavbar />}
    </MainContentContainer>
  )
}

export default App
