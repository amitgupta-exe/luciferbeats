import React from 'react';
import { Switch, Route } from 'react-router-dom'
import PackList from './components/PackList'
import Details from './components/Details'
import Cart from './components/Cart'
import PageNotFound from './components/PageNotFound'

import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <div>
            <Switch>
              <Route exact path="/" component={PackList} />
              <Route path="/details" component={Details} />
              <Route path="/cart" component={Cart} />
              <Route  component={PageNotFound} />
            </Switch>
          </div>
  )
}

export default App


