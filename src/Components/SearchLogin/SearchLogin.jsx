import React from "react";
import { Glyphicon } from "react-bootstrap";
import { Panel } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import Style from "./SearchLogin.css";
import Books from "../HOC/BookLoading";

class SearchLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar login={true}/>
        <div
          style={{
            position:"absolute",
            top:"20%",
            width:"100%",
            display: "block"
          }}
        >
          <div className={Style.ptext}>
            <form
              onSubmit={e => {
                e.preventDefault();
                this.props.click();
              }}
            >
              <input
                className={Style.searchText}
                type="input"
                onChange={e => {
                  this.props.text(e.target.value);
                }}
              />{" "}
              <button className={Style.sbtn}>
                <Glyphicon
                  style={{ color: "black" }}
                  glyph="glyphicon glyphicon-search"
                />
              </button>
            </form>
          </div>

          <div>
            <Books {...this.props} />
          </div>

          <div className={Style.recdiv}>
            <h3>Recommendation</h3>
            <Panel>
              <Panel.Body>
                <h4>Fiction</h4>
              </Panel.Body>
            </Panel>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchLogin;
