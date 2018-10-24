import React, { Component } from "react";
import SearchMain from "../src/Containers/SearchMain/SearchMain";
import { BrowserRouter, Route } from "react-router-dom";
import Styles from "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={SearchMain} />
      </BrowserRouter>
    );
  }
}

export default App;
