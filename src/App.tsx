import { isMobileOnly } from 'react-device-detect'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { DesktopTabletNavbar } from './components/molecules'
import { Explore } from './pages'

function App() {
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
          <div>Home</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
