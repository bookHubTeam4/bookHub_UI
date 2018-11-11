import React, { Component } from "react";
import SearchMain from "../src/Containers/SearchMain/SearchMain";
import BookInfo from "./Components/BookInformation/BookInfo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpForm from "./Components/Authentication/SignUpForm";
import SignInForm from "./Components/Authentication/SignInForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SearchMain} />
        <Route path="/bookInfo/:number" exact component={BookInfo} /> 
        <Route path="/login" exact component={SignInForm} />
        <Route path="/SignUp" exact component={SignUpForm} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;