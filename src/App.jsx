import React, { Component } from "react";
import SearchMain from "../src/Containers/SearchMain/SearchMain";
import BookInfo from "./Components/BookInformation/BookInfo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpForm from "./Components/Authentication/SignUpForm";
import SignInForm from "./Components/Authentication/SignInForm";
import MyShelf from './Components/MyShelf/Myshelf'
import PersonalInfo from './Components/Personal/PersonalInfo'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SearchMain} />
        <Route path="/bookInfo/:number" exact component={BookInfo} /> 
        <Route path="/login" exact component={SignInForm} />
        <Route path="/SignUp" exact component={SignUpForm} />
        <Route path='/MyShelf' exact component={MyShelf}/>
        <Route path='/PersonalInfo' exact component={PersonalInfo}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;