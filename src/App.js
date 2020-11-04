import React from 'react';
import Header from './component/header'
import Merge from './component/merge'
import Product from './component/product'
import Carts from './containers/carts'
import './component/style1.css'
import End from './component/end'
import CreateCart from './containers/createCart'
import { Provider } from 'react-redux'
import store from "./redux/store"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/new-project-cv">
              <Merge />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/create-basic-box">
              <CreateCart />
            </Route>
            <Route exact path="/cart">
              <Carts />
            </Route>
          </Switch>
          <End/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
