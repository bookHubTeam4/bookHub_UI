import React, { Component } from "react";
import SearchMain from "../src/Containers/SearchMain/SearchMain";

import BookInfo from "./Components/BookInformation/BookInfo";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";


import Authentication from '../src/Components/Authentication/Authentication';

// import Styles from "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SearchMain} />


        <Route path="/bookInfo/:number" exact component={BookInfo} /> 

        <Route path="/login" exact component={Authentication} />
        <Route path="/SignUp" exact component={Authentication} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;