import React from "react";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Modal, MenuItem } from "react-bootstrap";
import Styles from "../NavBar/NavBar.css";

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
    localStorage.setItem("tokken","");
    localStorage.setItem("name", "");
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
    console.log(this.props)
    let navName = null;
    if (this.props.tokken !== "") {
      navName = (
        <React.Fragment>
          <MenuItem>
            <span>{this.props.name}</span>
          </MenuItem>
          <button className="btn btn-link" onClick={this.handleLogout}>
            <span>Logout</span>
          </button>
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
        <ul className={Styles.leftUl}>
          <MenuItem>
            <LinkContainer to={{ pathname: "/foo", query: { bar: "baz" } }}>
              <span>Img</span>
            </LinkContainer>
          </MenuItem>

          <MenuItem>
            <LinkContainer to={{ pathname: "/", query: { bar: "baz" } }}>
              <span>BookHub</span>
            </LinkContainer>
          </MenuItem>
        </ul>

        <ul className={Styles.rightUl}>
          <React.Fragment>{navName}</React.Fragment>
        </ul>
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
    onNameReceive: name => dispatch({ type: "NAME", payLoad:  ""})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
