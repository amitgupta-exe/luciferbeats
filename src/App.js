import React from 'react';
import { Switch, Route } from 'react-router-dom'
import PackList from './components/PackList'
import Details from './components/Details'
import Cart from './components/Cart'
import PageNotFound from './components/PageNotFound'

import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
          <div>
            <Switch>
              <Route exact path="/" component={PackList} />
              <Route path="/details" component={Details} />
              <Route path="/cart" component={Cart} />
              <Route  component={PageNotFound} />
            </Switch>
          </div>
      </React.Fragment>
    )
  }
}
