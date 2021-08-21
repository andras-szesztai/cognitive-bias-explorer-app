import { useState } from 'react'
import { isMobileOnly } from 'react-device-detect'
import { Switch, Route } from 'react-router-dom'

import { DesktopTabletNavbar, MobileNavbar } from './components/molecules'
import { Explore, Home, Quiz } from './pages'

function App() {
  const [isFirstRender, setIsFirstRender] = useState(true)

  return (
    <>
      {!isMobileOnly && <DesktopTabletNavbar />}
      <Switch>
        <Route path="/explorer">
          <Explore />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/">
          <Home
            onFirstRender={() => setIsFirstRender(false)}
            isFirstRender={isFirstRender}
          />
        </Route>
      </Switch>
      {isMobileOnly && <MobileNavbar />}
    </>
  )
}

export default App
