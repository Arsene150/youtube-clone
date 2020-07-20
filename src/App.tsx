import React, {FC} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Top from './templates/Top'
import Search from './templates/Search'
import Watch from './templates/Watch'

const App: FC = () =>  {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Top} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/watch' component={Watch} />
      </Switch>
    </Router>
  )
}

export default App
