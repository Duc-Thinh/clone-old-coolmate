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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [state, setState] = useState({active: false})

  function dropDown(){
      return(
          setState({active: !state.active})
      )
  }

  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/">
            <Merge />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
