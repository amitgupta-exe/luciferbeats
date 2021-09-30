import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Details from './components/Details';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';
import Slide from './components/Slide';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
            <Switch>
              <Route exact path="/" component={Slide} />
              <Route path="/details" component={Details} />
              <Route path="/cart" component={Cart} />
              <Route  component={PageNotFound} />
            </Switch>
          </div>
  )
}

export default App


