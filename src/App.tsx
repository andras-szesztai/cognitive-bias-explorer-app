import { useState } from 'react'
import { isMobileOnly } from 'react-device-detect'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { DesktopTabletNavbar } from './components/molecules'
import { Explore, Home } from './pages'

function App() {
  const [isFirstRender, setIsFirstRender] = useState(true)
  return (
    <Router>
      {!isMobileOnly && <DesktopTabletNavbar />}
      <Switch>
        <Route path="/explorer">
          <Explore />
        </Route>
        <Route path="/quiz">
          <div>Quiz</div>
        </Route>
        <Route path="/">
          <Home
            onFirstRender={() => setIsFirstRender(false)}
            isFirstRender={isFirstRender}
          />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
