import React, { Component } from "react";
import { BookInfoService, BookStatusService } from "../../Service/Services";
import { connect } from "react-redux";
import Style from "./BookInfoStyle.css";
import { Button, Panel } from "react-bootstrap";
import Navbar from "../NavBar/NavBar";
import { Redirect } from "react-router-dom";

class BookInfo extends Component {
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

    this.check = this.check.bind(this);
  }


  logouthandle = () => {
    console.log("logout");
  };

  check(param) {
    console.log("Button " + param + " clicked");

    // this.state.buttonClicked = true  ;

    // if(this.props.tokken)
    console.log("this is **********token " + this.props.tokken);
    if (this.props.tokken === "") {
      console.log("entering if statem");
      this.setState({
        buttonClicked: true
      });
    } else {
      console.log("entering else statem");
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
      console.log(" promise made ");
      this.setState({
        LoggedInFlag: true,
        buttonClicked: true
      });
    }
  }
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
    if (
      this.state.LoggedInFlag === false &&
      this.state.buttonClicked === true
    ) {
      return <Redirect to="/login" />;
    }

    if (this.state.flag) {
      return (
        <React.Fragment>
          <Navbar logout={this.logouthandle} />
          <div className={Style.header}>
            <h1 className={Style.headerText}>{this.state.items.book.title}</h1>
          </div>

          <div className={Style.content}>
            <div className="row">
              <div className="col-md-2">
                <img src={this.state.items.book.image_url} alt="book_pic" />
              </div>

              <div style={{ margin: "auto" }} className="col-md-10">
                <Panel>
                  <h4 className={Style.text}>
                    {" "}
                    {this.state.items.book.description === " "
                      ? text
                      : this.state.items.book.description}
                  </h4>
                </Panel>
              </div>
            </div>
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
                Finished Reading
              </Button>{" "}
              <Button
                bsStyle={this.state.button3}
                onClick={() => this.check(3)}
              >
                Can't Buy?
              </Button>{" "}
            </div>
          </div>
        </React.Fragment>
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
