import React from "react";
import { Glyphicon } from "react-bootstrap";
import { Panel } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import Style from "./SearchLogin.css";

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
        <NavBar />
        <div className={Style.ptext}>
          <input
            className={Style.searchText}
            type="input"
            onChange={e => {
              this.props.text(e.target.value);
            }}
          />{" "}
          <Glyphicon
            style={{ color: "black" }}
            glyph="glyphicon glyphicon-search"
            onClick={e => {
              this.props.click();
            }}
          />
        </div>

        <div className={Style.recdiv}>
        <Panel >
          <Panel.Body>Basic panel example</Panel.Body>
        </Panel>
        </div>
        
      </React.Fragment>
    );
  }
}

export default SearchLogin;
