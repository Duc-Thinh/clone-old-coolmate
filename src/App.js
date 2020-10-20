import React from 'react';
import Header from './component/header'
import Merge from './component/merge'
import Product from './component/product'
import './component/style1.css'
import End from './component/end'
import CreateCart from './component/createCart'
import {
  BrowserRouter as Router,
  Switch,
  Route
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
          <Route path="/create-basic-box">
            <CreateCart />
          </Route>
        </Switch>
        <End/>
      </div>
      </Router>
  );
}

export default App;
