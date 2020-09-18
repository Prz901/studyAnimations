import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'


import {
  Home,
  Loader,
  Ring
} from './pages'

export default (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Loader" component={Loader} />
        <Route exact path="/Ring" component={Ring} />

      </Switch>
    </BrowserRouter>
  )
}