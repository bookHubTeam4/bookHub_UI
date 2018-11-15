import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Style from "../Authentication/Authentication.css";
import { loginService, SignInService, favouriteGenre } from "../../Service/Services";
import { GoogleLogin } from "react-google-login";
import  FacebookLogin  from "react-facebook-login";
import { withRouter } from 'react-router-dom';
import NavBar from "../../Components/NavBar/NavBar";
import { Alert,Modal,Row,Col, Button  } from 'react-bootstrap';

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      tokken:"",
      email: "",
      password: "",
      isOpen:false,
      show: false,
      alert:false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleDismiss() {
    this.setState({ alert: false });
  }

  handleRedirect() {
    this.props.history.push("/");
  }

  handleShow() {
    this.setState({show: true})
  }

  handleChange(e) {
    let target = e.target;
    //let value = target.value;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    loginService(this.state.email, this.state.password)
      .then(e => e.json()).then(e => {
        console.log(e);
        if (e.hasOwnProperty('user')) {
          this.props.onTokkenRecive(e.user.authentication_token);
          this.props.onNameReceive(e.user.firstName+" "+e.user.lastName);
          localStorage.setItem("tokken", e.user.authentication_token);
          localStorage.setItem("name", e.user.firstName+" "+e.user.lastName);
          console.log(this.props.tokken);
          this.props.history.push("/");
        }
        else
        {
          //alert("Invalid Username or Password");
          this.setState({ alert: true });
        }
      });
  }

  handleSelect(e){
    console.log("Items");
    console.log(this.state);
    var fav=[];
    this.state.classics? fav.push("classics"):null;
    this.state.fantasy? fav.push("fantasy"):null;
    this.state.mystery? fav.push("mystery"):null;
    this.state.teen? fav.push("teen"):null;
    this.state.art? fav.push("art"):null;
    this.state.computers? fav.push("computers"):null;
    this.state.business? fav.push("business"):null;
    this.state.entertainment? fav.push("entertainment"):null;
    this.state.fiction? fav.push("fiction"):null;
    this.state.health? fav.push("health"):null;
    this.state.history? fav.push("history"):null;
    this.state.comedy? fav.push("comedy"):null;
    this.state.romance? fav.push("romance"):null;
    this.state.cooking? fav.push("cooking"):null;
    this.state.science? fav.push("science"):null;
    this.state.nature? fav.push("nature"):null;
    this.state.sports? fav.push("sports"):null;
    this.state.travel? fav.push("travel"):null;
    this.state.culture? fav.push("culture"):null;
    this.state.misc? fav.push("misc"):null;
    console.log(fav);
    console.log(this.props.tokken);
    favouriteGenre(this.props.tokken, fav)
      .then(e => e.json())
      .then(e => {
          this.props.history.push("/");
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
        if(e.hasOwnProperty('available_genres'))
        {
        this.handleShow();
        }
        else
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
        if(e.hasOwnProperty('available_genres'))
        {
        this.handleShow();
        }
        else
        this.props.history.push("/");
      }
    });
  };


  render() {

    let alert = null;
    if (this.state.alert) {
      alert = (
        <React.Fragment>
           <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
          <p>
            Invalid username or password
          </p>
        </Alert>
        </React.Fragment>
      );
    }
    return (
      <div className={Style.login_bg}>
     
      {alert}
      <NavBar/>
     
      <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Select Favourite Genre</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <form className="form-group">
          <Row className="show-grid">
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="classics"
              name="classics"
              value="classics"
              onChange={this.handleChange}
            />{" "}classics

          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="fantasy"
              name="fantasy"
              value="fantasy"
              onChange={this.handleChange}
            />{" "}fantasy
          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="mystery"
              name="mystery"
              value="mystery"
              onChange={this.handleChange}
            />{" "}mystery
          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="teen"
              name="teen"
              value="teen"
              onChange={this.handleChange}
            />{" "}teen

          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="art"
              name="art"
              value="art"
              onChange={this.handleChange}
            />{" "}art
          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="computers"
              name="computers"
              value="computers"
              onChange={this.handleChange}
            />{" "}computers
          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="business"
              name="business"
              value="business"
              onChange={this.handleChange}
            />{" "}business

          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="entertainment"
              name="entertainment"
              value="entertainment"
              onChange={this.handleChange}
            />{" "}entertainment
          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="fiction"
              name="fiction"
              value="fiction"
              onChange={this.handleChange}
            />{" "}fiction
          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="health"
              name="health"
              value="health"
              onChange={this.handleChange}
            />{" "}health

          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="history"
              name="history"
              value="history"
              onChange={this.handleChange}
            />{" "}history
          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="comedy"
              name="comedy"
              value="comedy"
              onChange={this.handleChange}
            />{" "}comedy
          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="romance"
              name="romance"
              value="romance"
              onChange={this.handleChange}
            />{" "}romance

          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="cooking"
              name="cooking"
              value="cooking"
              onChange={this.handleChange}
            />{" "}cooking
          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="science"
              name="science"
              value="science"
              onChange={this.handleChange}
            />{" "}science
          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="nature"
              name="nature"
              value="nature"
              onChange={this.handleChange}
            />{" "}nature

          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="sports"
              name="sports"
              value="sports"
              onChange={this.handleChange}
            />{" "}sports
          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="travel"
              name="travel"
              value="travel"
              onChange={this.handleChange}
            />{" "}travel
          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="culture"
              name="culture"
              value="culture"
              onChange={this.handleChange}
            />{" "}culture

          </Col>
          <Col xs={12} md={4}>
          <input
              type="checkbox"
              id="misc"
              name="misc"
              value="misc"
              onChange={this.handleChange}
            />{" "}misc
          </Col>
        </Row>
        <Modal.Footer>
        <Row className="show-grid">
        <Col md={1}>
            <button type="button" className="btn btn-secondary" onClick={this.handleRedirect}>Skip</button>
        </Col>

            <button type="button" className="btn btn-success" onClick={this.handleSelect}>Submit</button>
            </Row>
          </Modal.Footer>
        </form>
            
          </Modal.Body>
        </Modal>
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
            <Button type="submit" bsStyle="primary">Sign In</Button>{" "}
            <Link to="/signUp" className={Style.FormField__Link}>
              Create an account
            </Link>
          </div>
        </form>
        <hr className={Style.hrStyle}></hr>
        Log In with
        <Row style={{ padding: "10px" }}>
        <Col md={12}>
        <GoogleLogin 
          clientId="867945999343-gr16hdcap7et6keb5qf8lderkurtri27.apps.googleusercontent.com"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          
        >
          <i
            style={{ color: "White" }}
            className="fab fa-google"
          />
          {" "}
          <span>Login with Google</span>
        </GoogleLogin>
        </Col>
        </Row>
        
        <Row style={{ padding: "10px" }}>     
        <Col md={12}>
        <FacebookLogin 
          appId="2187369724923695"
          autoLoad={false}
          fields="first_name,last_name,email,picture"
          callback={this.responseFacebook}
          cssClass={Style.buttonFB}
          
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm));
