import React from "react";
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
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize = () => {
    this.setState({ height: window.innerWidth });
  };

  render() {
    var navbar = (
      <React.Fragment>
        <ul className={Styles.leftUl}>
          <MenuItem>
            <LinkContainer to={{ pathname: "/foo", query: { bar: "baz" } }}>
              <span>Img</span>
            </LinkContainer>
          </MenuItem>

          <MenuItem>
            <LinkContainer to={{ pathname: "/foo", query: { bar: "baz" } }}>
              <span>BookHub</span>
            </LinkContainer>
          </MenuItem>
        </ul>

        <ul className={Styles.rightUl}>
          <MenuItem>
            <LinkContainer to={{ pathname: "/foo", query: { bar: "baz" } }}>
              <span>Login</span>
            </LinkContainer>
          </MenuItem>
          <MenuItem>
            <LinkContainer to={{ pathname: "/foo", query: { bar: "baz" } }}>
              <span>Register</span>
            </LinkContainer>
          </MenuItem>f
        </ul>
      </React.Fragment>
    );
    if (this.state.height < 600) {
      navbar = (
        <button
          className={Styles.navBtn}
          onClick={e => {
            console.log("elvis");
            this.setState({ show: true });
          }}
        >
          <i
            style={{ color: "white", padding: "10px", float: "right" }}
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

                <MenuItem>
                  <LinkContainer
                    to={{ pathname: "/foo", query: { bar: "baz" } }}
                  >
                    <span>Login</span>
                  </LinkContainer>
                </MenuItem>

                <MenuItem>
                  <LinkContainer
                    to={{ pathname: "/foo", query: { bar: "baz" } }}
                  >
                    <span>Register</span>
                  </LinkContainer>
                </MenuItem>
              </ul>
            </Modal.Body>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}
export default NavBar;
