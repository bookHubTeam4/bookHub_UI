import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import Style from '../Authentication/Authentication.css'
export class Authentication extends Component{

    state = {
        count:1
    };

    handleIncrement = () =>{
        this.setState({count:this.state.count+1});
    }

    render(){
    return (<Router basename="/">
    <div className={Style.login_bg}>

      <div className={Style.login__Form}>
          <div className={Style.FormTitle}>
              <NavLink to="/sign-in" activeClassName={Style.FormTitle__Link} className={Style.FormTitle__Link}>Sign In</NavLink> or <NavLink exact to="/" activeClassName={Style.FormTitle__Link} className={Style.FormTitle__Link}>Sign Up</NavLink>
          </div>

          <Route exact path="/" component={SignUpForm}>
          </Route>
          <Route path="/sign-in" component={SignInForm}>
          </Route>
      </div>

    </div>
  </Router>);
    }
    }

export default Authentication;