import React from "react";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Modal, MenuItem, Glyphicon } from "react-bootstrap";
import Styles from "../NavBar/NavBar.css";
import logo from "../../img/icon.png";
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      height: ""
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.onTokkenRecive();
    this.props.onNameReceive();
    localStorage.setItem("tokken", "");
    localStorage.setItem("name", "");
    if(this.props.login){
      this.props.logout();
    } 
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize = () => {
    this.setState({ height: window.innerWidth });
  };

  render() {
    console.log("navbar");
    console.log(this.props);
    let navName = null;
    if (this.props.tokken !== "") {
      navName = (
        <React.Fragment>
          <MenuItem>
            <LinkContainer to={{ pathname: "/MyShelf" }}>
              <span>My Shelf</span>
            </LinkContainer>
          </MenuItem>
          <MenuItem>
            <LinkContainer to={{ pathname: "/PersonalInfo" }}>
              <span>{this.props.name}</span>
            </LinkContainer>
          </MenuItem>

           <MenuItem>
            <LinkContainer to={{ pathname: '/chatRoom'}}>
              <span>
              Bookhub chat room
              </span>
            </LinkContainer>
          </MenuItem>


          <MenuItem>
            <button className="btn btn-link" onClick={this.handleLogout}>
              <p style={{ color: "black", marginTop: "10px" }}>
                {" "}
                <Glyphicon glyph="glyphicon glyphicon-off" />{" "}
              </p>
            </button>
          </MenuItem>
        </React.Fragment>
      );
    } else {
      navName = (
        <React.Fragment>
          <MenuItem>
            <LinkContainer to={{ pathname: "/login", query: { bar: "baz" } }}>
              <span>Login</span>
            </LinkContainer>
          </MenuItem>

          <MenuItem>
            <LinkContainer to={{ pathname: "/signup", query: { bar: "baz" } }}>
              <span>Register</span>
            </LinkContainer>
          </MenuItem>
        </React.Fragment>
      );
    }

    var navbar = (
      <React.Fragment>
        <div className={Styles.divNav}>
          <ul className={Styles.leftUl}>
            <MenuItem>
              <LinkContainer to={{ pathname: "/" }}>
                <span>
                  <img src={logo} alt="logo" classNmae={Styles.logo} />{" "}
                </span>
              </LinkContainer>
            </MenuItem>
          </ul>

          <ul className={this.props.login ? Styles.rightUl : Styles.rightUll}>
            <React.Fragment>{navName}</React.Fragment>
          </ul>
        </div>
      </React.Fragment>
    );

    if (this.state.height < 600) {
      navbar = (
        <button
          className={Styles.navBtn}
          onClick={e => {
            this.setState({ show: true });
          }}
        >
          <i
            style={
              this.props.login
                ? { color: "black", padding: "10px", float: "right" }
                : { color: "white", padding: "10px", float: "right" }
            }
            className="fas fa-bars fa-3x"
          />
        </button>
      );
    }

    return (
      <React.Fragment>
        <nav>{navbar}</nav>
        <div>
          <Modal
            show={this.state.show}
            onHide={e => {
              this.setState({ show: false });
            }}
          >
            <Modal.Body>
              <ul>
                <MenuItem>
                  <LinkContainer
                    to={{ pathname: "/foo", query: { bar: "baz" } }}
                  >
                    <span>BookHub</span>
                  </LinkContainer>
                </MenuItem>
                {navName}
              </ul>
            </Modal.Body>
          </Modal>
        </div>
      </React.Fragment>
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
    onTokkenRecive: tokken => dispatch({ type: "TOKKEN", payLoad: "" }),
    onNameReceive: name => dispatch({ type: "NAME", payLoad: "" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
