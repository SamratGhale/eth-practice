import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './components/Home'
import AddCandidate from './components/AddCandidate'

import { Router, Switch, Route } from 'react-router-dom'
import history from './history'

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/AddCandidate" component={AddCandidate} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)
