import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Navbar from "../NavBar/NavBar";
import { getMyShelf } from "../../Service/Services";
import MyshelfItem from "../MyShelfItem/MyShelfItem";
import { Row, Col, Panel } from "react-bootstrap";

class Myshelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_shelf: []
    };
  }

  componentDidMount() {
    getMyShelf(this.props.tokken)
      .then(e => e.json())
      .then(e => {
        this.setState({ user_shelf: e.user_shelf });
      });
  }


  render() {
    let books = null;
    if (this.state.user_shelf !== []) {
      books = this.state.user_shelf.map((e, i) => (
        <MyshelfItem key={i} {...e} rating={this.onStarClick} />
      ));
    }
    return (
      <div>
        <Navbar />
        <div
          style={{
            position: "absolute",
            top: "20%",
            width: "100%",
            padding: "50px"
          }}
        >
          {books !== null ? (
            <Row style={{ backgroundColor: "#ffbf00" }}>
              <Col md={2} />
              <Col md={2} style={{ itemAlign: "center" }}>
                <p>Book Name</p>
              </Col>
              <Col md={2}>
                <p>Status</p>
              </Col>
              <Col md={2}>
                <p> Author</p>
              </Col>
              <Col md={2}>
                <p> Rating</p>
              </Col>
              <Col md={2}>
                <p>Star</p>
              </Col>
            </Row>
          ) : null}
          {books}
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
    onNameReceive: name => dispatch({ type: "NAME", payLoad: name })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Myshelf);
