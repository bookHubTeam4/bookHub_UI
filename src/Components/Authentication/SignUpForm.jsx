import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Style from "../Authentication/Authentication.css";
import { signUpService, favouriteGenre } from "../../Service/Services";
import NavBar from "../../Components/NavBar/NavBar";
import { Modal,Row,Col,Checkbox,FormGroup  } from 'react-bootstrap';
//import favouriteGenre from '../Modals/favouriteGenre'

class SignUpForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      isOpen:false,
      show: false,
      // classics:false,
      // fantasy:false,
      // mystery:false,
      // teen:false,
      // art:false,
      // computers:false,
      // business:false,
      // entertainment:false,
      // fiction:false,
      // health:false,
      // history:false,
      // comedy:false,
      // romance:false,
      // cooking:false,
      // science:false,
      // nature:false,
      // sports:false,
      // travel:false,
      // culture:false,
      // misc:false

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleRedirect() {
    this.props.history.push("/");
  }

  handleShow() {
    this.setState({ show: true });
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

  handleSubmit(e) {
    e.preventDefault();
    signUpService(
      this.state.fname,
      this.state.lname,
      this.state.email,
      this.state.password
    )
      .then(e => e.json())
      .then(e => {
        console.log(e);
        if (e.user.authentication_token) {
          localStorage.setItem("tokken", e.user.authentication_token);
          localStorage.setItem("name", e.user.firstName+" "+e.user.lastName);
          this.props.onTokkenRecive(e.user.authentication_token);
          this.props.onNameReceive(e.user.firstName+" "+e.user.lastName);
          //this.props.history.push("/");
          this.handleShow();
        }
      });
  }

  render() {
    return (
      <div className={Style.login_bg}>
      <NavBar/>

      {/* {this.state.show?<favouriteGenre show={this.state.show} onHide={this.handleClose}/>:null} */}
      <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Select Favourite Genre</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Select Favourite Genre</h4>
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
      <div className={Style.FormField}>
            <button className="btn btn-primary" onClick={e=>{
              this.setState({show:true})
            }}>Model Open</button>
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
    onTokkenRecive: tokken => dispatch({ type: "TOKKEN", payLoad: tokken }),
    onNameReceive:name => dispatch({type:"NAME",payLoad: name})
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
