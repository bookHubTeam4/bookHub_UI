import React from "react";
import { Row, Col, Panel } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

class MyShelfItem extends React.Component {
  onStarClick(nextValue, prevValue, name) {
    console.log(nextValue);
    this.setState({ rating: nextValue });
  }

  render() {
    return (
      <Panel>
        <Row>
          <Col md={1}>
            <img src={this.props.image_url} alt="bookPic" />
          </Col>

          <Col md={1}>
            <p>{this.props.name}</p>
          </Col>

          <Col md={1}>
            <p>{this.props.status}</p>
          </Col>

          <Col md={1}>
            <p>{this.props.author}</p>
          </Col>
          <Col md={1}>
            <p>{this.props.average_rating}</p>
          </Col>
          <Col md={1}>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={this.props.average_rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </Col>
        </Row>
      </Panel>
    );
  }
}

export default MyShelfItem;
