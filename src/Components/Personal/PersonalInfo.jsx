import React from "react";
import { withRouter } from "react-router";
import Navbar from "../NavBar/NavBar";

class PersonalInfo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div style={{position:"absolute",top:"20%",padding:"50px"}}>personal</div>
      </React.Fragment>
    );
  }
}

export default withRouter(PersonalInfo);
