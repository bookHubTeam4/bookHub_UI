import React from "react";
import { Glyphicon } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import Style from "./SearchLogin.css";
import Books from "../HOC/BookLoading";
import { getRecommendation } from "../../Service/Services";
import RecommendationHOC from "../HOC/RecommandationHOC";
import { connect } from "react-redux";

class SearchLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      Recommendation: null
    };
  }

  logouthandle = () => {
    this.props.logout();
  };

  componentDidMount() {
    if (this.props.tokken !== "") {
      getRecommendation(this.props.tokken)
        .then(e => e.json())
        .then(e => {
          console.table(e);
          this.setState({ Recommendation: e.book });
        });
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar login={true} logout={this.logouthandle} />
        <div
          style={{
            position: "absolute",
            top: "15%",
            width: "100%",
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
                placeholder="Search any book"
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
            <h1>Recommendation:</h1>
            <RecommendationHOC {...this.state.Recommendation} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    tokken: state.tokken
  };
};

export default connect(
  mapStateToProps,
  null
)(SearchLogin);
