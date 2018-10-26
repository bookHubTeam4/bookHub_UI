import React, { Component } from "react";
import SearchMain from "../src/Containers/SearchMain/SearchMain";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Authentication from '../src/Components/Authentication/Authentication';
// import Styles from "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SearchMain} />
        <Route path="/login" exact component={Authentication} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
