import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Style from "../Authentication/Authentication.css";
import { signUpService } from "../../Service/Services";
import NavBar from "../../Components/NavBar/NavBar";
import Modal from "../Modals/Modal";
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      isOpen:false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal = () => {
    console.log("Open Modal Clicked");
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log(this.state.isOpen);
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

    console.log("The form was submitted with the following data:");
    console.log(this.state);
    signUpService(
      this.state.fname,
      this.state.lname,
      this.state.email,
      this.state.password
    )
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
    return (
      <div className={Style.login_bg}>
      <NavBar/>
      <button onClick={this.toggleModal}>
          Open the modal
        </button>
        <Modal show={this.state.isOpen} onClose={this.toggleModal}/>
        <div className={Style.login__Form}>
          <div>
            <NavLink
              to="/login"
              activeClassName={Style.FormTitle__Link}
              className={Style.FormTitle__Link}
            >
              Sign In
            </NavLink>{" "}
           or {" "}
            <NavLink
              to="/signUp"
              activeClassName={Style.FormTitle__Link}
              className={Style.FormTitle__Link}
            >
              Sign Up
            </NavLink>
          </div>
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="form-group">
          <div className={Style.FormField}>
            <input
              type="text"
              id="fname"
              className="form-control"
              placeholder="Enter your first name"
              name="fname"
              onChange={this.handleChange}
            />
          </div>
          <div className={Style.FormField}>
            <input
              type="text"
              id="lname"
              className="form-control"
              placeholder="Enter your last name"
              name="lname"
              onChange={this.handleChange}
            />
          </div>
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
            <button className="btn btn-primary">Sign Up</button>{" "}
            <Link to="/login" className="FormField__Link">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
      </div>
 
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
)(SignUpForm);
