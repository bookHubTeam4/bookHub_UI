import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import Style from "../Authentication/Authentication.css";
import NavBar from "../../Components/NavBar/NavBar";
export class Authentication extends Component {
  state = {
    count: 1
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
   
      <BrowserRouter>
        <div className={Style.login_bg}>
        <NavBar/>
          <div className={Style.login__Form}>
            <div className={Style.FormTitle}>
              <NavLink
                to="/login"
                activeClassName={Style.FormTitle__Link}
                className={Style.FormTitle__Link}
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/signUp"
                activeClassName={Style.FormTitle__Link}
                className={Style.FormTitle__Link}
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/login" component={SignInForm} />
            <Route path="/signUp" component={SignUpForm} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Authentication;
