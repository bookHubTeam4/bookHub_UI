import React, { Component } from "react";
import SearchMain from "../src/Containers/SearchMain/SearchMain";

import PawanFirstPage from "./Components/BookInformation/PawanFirstPage";
import BookInfo from "./Components/BookInformation/BookInfo";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";



// import Styles from "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SearchMain} />
        <Route path="/p" exact component={PawanFirstPage} /> /bookInfo
        <Route path="/bookInfo/:number" exact component={BookInfo} /> 
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;