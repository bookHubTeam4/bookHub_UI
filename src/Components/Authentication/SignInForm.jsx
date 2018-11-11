import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Style from "../Authentication/Authentication.css";
import { loginService, SignInService } from "../../Service/Services";
import { GoogleLogin } from "react-google-login";
import  FacebookLogin  from "react-facebook-login";
import {Row,Col} from 'react-bootstrap';
import NavBar from "../../Components/NavBar/NavBar";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      tokken:null,
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
      .then(e => e.json()).then(e => {
        if (e.user.authentication_token) {
          localStorage.setItem("tokken", e.user.authentication_token);
          localStorage.setItem("name", e.user.firstName+" "+e.user.lastName);
          this.props.onTokkenRecive(e.user.authentication_token);
          this.props.onNameReceive(e.user.firstName+" "+e.user.lastName);

          console.log(this.props.tokken);
          this.props.history.push("/");
        }
      });
  }

  responseGoogle(response) {
    console.log(response);
    console.log(response.profileObj.email);
    console.log(response.profileObj.name);
    SignInService(response.profileObj.givenName,response.profileObj.familyName, response.profileObj.email, "google")
    .then(e => e.json()).then(e => {
      if (e.user.authentication_token) {
        localStorage.setItem("tokken", e.user.authentication_token);
        localStorage.setItem("name", e.user.firstName+" "+e.user.lastName);
        this.props.onTokkenRecive(e.user.authentication_token);
        this.props.onNameReceive(e.user.firstName+" "+e.user.lastName);

        console.log(this.props.tokken);
        this.props.history.push("/");
      }
    });
  }

  responseFacebook = response => {
    console.log(response);
    console.log(response.first_name);
    console.log(response.last_name);

    SignInService(response.first_name, response.last_name, response.email, "facebook")
    .then(e => e.json()).then(e => {
      if (e.user.authentication_token) {
        localStorage.setItem("tokken", e.user.authentication_token);
        localStorage.setItem("name", e.user.firstName+" "+e.user.lastName);
        this.props.onTokkenRecive(e.user.authentication_token);
        this.props.onNameReceive(e.user.firstName+" "+e.user.lastName);

        console.log(this.props.tokken);
        this.props.history.push("/");
      }
    });
  };


  render() {
    return (
      <div className={Style.login_bg}>
      <NavBar/>
        <div className={Style.login__Form}>
          <div>
            <NavLink
              to="/login"
              activeClassName={Style.FormTitle__Link}
              className={Style.FormTitle__Link}
            >
              Sign In
            </NavLink>{" "}
            or{" "}
            <NavLink
              to="/signUp"
              activeClassName={Style.FormTitle__Link}
              className={Style.FormTitle__Link}
            >
              Sign Up
            </NavLink>
          </div>
      <div className={Style.FormCenter}>
        <form onSubmit={this.handleSubmit} className="form-group">
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
        <Row>
        <Col md={12}>
        <GoogleLogin 
          clientId="867945999343-gr16hdcap7et6keb5qf8lderkurtri27.apps.googleusercontent.com"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          style={{ width: "70%"
        }}
        >
          <i
            style={{ color: "white" }}
            className="fab fa-google"
          />
          <span>Login with Google</span>
        </GoogleLogin>
        </Col>
        </Row>
        
        <Row style={{ padding: "30px" }}>     
        <Col md={12}>
        <FacebookLogin 
          appId="2187369724923695"
          autoLoad={false}
          fields="first_name,last_name,email,picture"
          callback={this.responseFacebook}
          icon="fa-facebook"   
        />
        </Col>
        </Row>
         </div>
         </div>
         </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tokken: state.tokken,
    name: state.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTokkenRecive: tokken => dispatch({ type: "TOKKEN", payLoad: tokken }),
    onNameReceive:name => dispatch({type:"NAME",payLoad: name})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
