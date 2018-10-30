import React, { Component } from "react";
import { Link } from "react-router-dom";
import Style from "../Authentication/Authentication.css";
import { loginService } from "../../Service/Services";
import { GoogleLogin } from "react-google-login";
import  FacebookLogin  from "react-facebook-login";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    loginService(this.state.email, this.state.password)
      .then(e => e.json())
      .then(e => console.table(e));
  }

  responseGoogle(response) {
    console.log(response);
  }

  responseFacebook = response => {
    console.log(response);
  };

  render() {
    return (
      <div className={Style.FormCenter}>
        <form
          onSubmit={this.handleSubmit}
          className="form-group"
          onSubmit={this.handleSubmit}
        >
          <div className={Style.FormField}>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              onChange={this.handleChange}
              required
            />
          </div>

          <div className={Style.FormField}>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              name="password"
              onChange={this.handleChange}
              required
            />
          </div>

          <div className={Style.FormField}>
            <button className="btn btn-primary">Sign In</button>{" "}
            <Link to="/signUp" className={Style.FormField__Link}>
              Create an account
            </Link>
          </div>
        </form>
        <div className="row">
        <GoogleLogin 
          clientId="867945999343-gr16hdcap7et6keb5qf8lderkurtri27.apps.googleusercontent.com"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        >
          <i
            style={{ color: "white" }}
            className="fab fa-google"
          />
        </GoogleLogin>
        <FacebookLogin 
          appId="2187369724923695"
          autoLoad
          callback={this.responseFacebook}
          render={renderProps => (
            <button onClick={renderProps.onClick}>This is my custom FB button</button>
          )}
        />
        </div>
      </div>
    );
  }
}

export default SignInForm;
