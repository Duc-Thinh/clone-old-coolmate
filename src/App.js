import React, { useState } from 'react';
import Header from './component/header'
import Merge from './component/merge'
import Product from './component/product'
import './component/style1.css'
import Icon1 from "./icon/icon1.png"
import Icon2 from "./icon/icon2.png"
import Icon3 from "./icon/icon3.png"
import classNames from 'classnames'
import Banner from './component/banner'
import End from './component/end'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/new-project-cv/">
            <Merge />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
        </Switch>
        <End/>
      </div>
      </Router>
  );
}

export default App;
