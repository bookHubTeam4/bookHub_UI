import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
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
    return (<BrowserRouter>
    <div className={Style.login_bg}>

      <div className={Style.login__Form}>
          <div className={Style.FormTitle}>
              <NavLink to="/signin" activeClassName={Style.FormTitle__Link} className={Style.FormTitle__Link}>Sign In</NavLink> or <NavLink exact to="/login" activeClassName={Style.FormTitle__Link} className={Style.FormTitle__Link}>Sign Up</NavLink>
          </div>

          <Route exact path="/login" component={SignUpForm}>
          </Route>
          <Route path="/signin" component={SignInForm}>
          </Route>
      </div>

    </div>
  </BrowserRouter>);
    }
    }

export default Authentication;