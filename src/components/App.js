import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Scene from './Scene'
import NotFound from './NotFound'

const App = () => (
  <Router>
    <Switch>
      <Route path="/scenes/:id" component={Scene} />
      <Route path="/404" component={NotFound} />
      <Redirect to="/scenes/1" />
    </Switch>
  </Router>
)

export default App
