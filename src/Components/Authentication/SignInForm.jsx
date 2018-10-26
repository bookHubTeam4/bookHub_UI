import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Style from "../Authentication/Authentication.css";
import { loginService } from "../../Service/Services";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      .then(e => {
        console.log(e.authentication_token);
        if (e.authentication_token) {
          localStorage.setItem("tokken", e.authentication_token);
          this.props.onTokkenRecive(e.authentication_token);
        }
      });
  }

  render() {
    console.log(this.props.tokken);
    return (
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
            />
          </div>

          <div className={Style.FormField}>
            <button className="btn btn-primary">Sign In</button>{" "}
            <Link to="/signUp" className={Style.FormField__Link}>
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tokken: state.tokken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTokkenRecive: tokken => dispatch({ type: "TOKKEN", payLoad: tokken })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
