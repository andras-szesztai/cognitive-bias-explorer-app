import { useEffect, useState } from 'react'
import { isMobileOnly } from 'react-device-detect'
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'

import { DesktopTabletNavbar } from './components/molecules'
import { Explore, Home, Quiz } from './pages'

function App() {
  const [isFirstRender, setIsFirstRender] = useState(true)
  const location = useLocation()
  const history = useHistory()
  useEffect(() => {
    if (isMobileOnly && location.pathname !== '/explorer') {
      history.push('/explorer') // TODO: remove later
    }
  })

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
    </>
  )
}

export default App
