import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Details from './components/Details';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';
import Slide from './components/Slide';
import Header from './components/Header';
import ShopSamplePacks from './components/ShopSamplePacks';
import ShopCourses from './components/ShopCourses';
import Footer from './components/Footer';
import './styles/styles.css'

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Slide />
          <ShopSamplePacks />
          <ShopCourses />
        </Route>
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />

    </div>
  )
}

export default App


