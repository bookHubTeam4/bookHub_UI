import React, { Component } from "react";
import { BookInfoService } from "../../Service/Services";
import Style from "./BookInfoStyle.css";
import { Container, Row, Col, Jumbotron, Badge, Button } from "reactstrap";

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
    if (this.state.flag) {
      return (
        <div className={Style.pimg}>
          <Jumbotron>
            <Container>
              <Row>
                <Col>
                  <Badge color="primary">
                    <h1>{this.state.items.book.title}</h1>
                  </Badge>
                </Col>
              </Row>
            </Container>
          </Jumbotron>

          <Jumbotron>
            <div className="row">
              <div className="col-md-2">
                <img
                  width="300"
                  height="400"
                  src={this.state.items.book.image_url}
                  alt="book_pic"
                />
              </div>

              <div className="col-md-10">
                <h4> {this.state.items.book.description}</h4>
              </div>
            </div>
            <br /> <br /> <br />
            <div className="row">
              <div className="col-md-4">
                <p>AUTHOR : {this.state.items.book.author}</p>
                <p>Published Date : {this.state.items.book.published_date}</p>
                <p>ISBN : {this.state.items.book.isbn}</p>
              </div>{" "}
            </div>
            <div align="center">
              <Button color="primary">Add To Reading List</Button>{" "}
              <Button color="success">Finished Reading</Button>{" "}
              <Button color="danger">Can't Buy?</Button>{" "}
            </div>
          </Jumbotron>
        </div>
      );
    }

    return <div>Loading...</div>;
  }
}
