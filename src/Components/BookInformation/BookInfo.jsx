import React, { Component } from "react";
import { BookInfoService } from "../../Service/Services";
import Style from "./BookInfoStyle.css";
import { Button } from "react-bootstrap";

export default class BookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      flag: false
    };
  }

  componentDidMount() {
    BookInfoService(this.props.match.params.number)
      .then(e => e.json())
      .then(e => {
        this.setState({ items: e, flag: true });
      });
  }

  render() {
    let text =
      "Greatest properly off ham exercise all. Unsatiable invitation its possession nor off. All difficulty estimating unreserved increasing the solicitude. Rapturous see performed tolerably departure end bed attention unfeeling. On unpleasing principles alteration of. Be at performed preferred determine collected. Him nay acuteness discourse listening estimable our law. Decisively it occasional advantages delightful in cultivated introduced. Like law mean form are sang loud lady put. ";
    if (this.state.flag) {
      return (
        <React.Fragment>
          <div className={Style.header}>
            <h1 className={Style.headerText}>{this.state.items.book.title}</h1>
          </div>

          <div className={Style.content}>
            <div className="row">
              <div className="col-md-2">
                <img src={this.state.items.book.image_url} alt="book_pic" />
              </div>

              <div style={{ margin: "auto" }} className="col-md-10">
                <h4 className={Style.text}>
                  {" "}
                  {this.state.items.book.description !== " "
                    ? text
                    : this.state.items.book.description}
                </h4>
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
              <Button bsStyle="primary" bsSize="large">
                Add To Reading List
              </Button>{" "}
              <Button bsStyle="success" bsSize="large">
                Finished Reading
              </Button>{" "}
              <Button bsStyle="danger" bsSize="large">
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
