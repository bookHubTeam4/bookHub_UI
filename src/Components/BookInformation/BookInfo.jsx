import React from "react";
import { BookInfoService, BookStatusService } from "../../Service/Services";
import { connect } from "react-redux";
import Style from "./BookInfoStyle.css";
import {Row,Col, Button, Panel } from "react-bootstrap";
import Navbar from "../NavBar/NavBar";

class BookInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      flag: false,
      LoggedInFlag: false,
      buttonClicked: false,
      button1: "primary",
      button2: "primary",
      button3: "primary"
    };
  }

  logouthandle = () => {
    console.log("logout");
  };

  check = param => {
    if (this.props.tokken === "") {
      this.setState({
        buttonClicked: true
      });
      this.props.history.push("/login");
    } else {
      BookStatusService(
        param,
        this.props.match.params.number,
        this.props.tokken
      )
        .then(response => response.json())
        .then(data => {
          if (data.status === "wants_to_read") {
            this.setState({
              button1: "success",
              button2: "primary",
              button3: "primary"
            });
          } else if (data.status === "reading") {
            this.setState({
              button1: "primary",
              button2: "success",
              button3: "primary"
            });
          } else if (data.status === "read") {
            this.setState({
              button1: "primary",
              button2: "primary",
              button3: "success"
            });
          }
        });
    }
  };
  componentDidMount() {
    BookInfoService(this.props.match.params.number)
      .then(e => e.json())
      .then(e => {
        this.setState({ items: e, flag: true });
      });
    console.log(this.props.tokken);
  }

  render() {
    let text =
      "Greatest properly off ham exercise all. Unsatiable invitation its possession nor off. All difficulty estimating unreserved increasing the solicitude. Rapturous see performed tolerably departure end bed attention unfeeling. On unpleasing principles alteration of. Be at performed preferred determine collected. Him nay acuteness discourse listening estimable our law. Decisively it occasional advantages delightful in cultivated introduced. Like law mean form are sang loud lady put. ";

    if (this.state.flag) {
      return (
        <div className={Style.login_bg}>
          <Navbar logout={this.logouthandle} />
          <div className={Style.header}>
            <h1 className={Style.headerText}>{this.state.items.book.title}</h1>
          </div>

          <div className={Style.content}>
            <Row >
              <Col md={3}>
                <img src={this.state.items.book.image_url} alt="book_pic" />
              </Col>

              <Col md={1} />

              <Col md={5}
                style={{ margin: "auto", textAlign: "center", width: "50%" }}>
                <Panel>
                  <h4 className={Style.text}>
                    {" "}
                    {this.state.items.book.description === " "
                      ? text
                      : this.state.items.book.description}
                  </h4>
                </Panel>
              </Col>

              <Col md={3} />
            </Row>

            <div className="row">
              <div style={{ padding: 50 }}>
                <p>AUTHOR : {this.state.items.book.author}</p>
                <p>Published Date : {this.state.items.book.published_date}</p>
                <p>ISBN : {this.state.items.book.isbn}</p>
              </div>{" "}
            </div>

            <div className={Style.btngrp}>
              <Button
                bsStyle={this.state.button1}
                onClick={() => this.check(1)}
              >
                Add To Reading List
              </Button>{" "}
              <Button
                bsStyle={this.state.button2}
                onClick={() => this.check(2)}
              >
                Reading
              </Button>{" "}
              <Button
                bsStyle={this.state.button3}
                onClick={() => this.check(3)}
              >
                Finish Reading
              </Button>{" "}
            </div>
          </div>
        </div>
      );
    }

    return <div className={Style.loader}>Loading...</div>;
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
)(BookInfo);
