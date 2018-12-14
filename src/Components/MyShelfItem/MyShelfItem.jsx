import React from "react";
import { Row, Col, Panel } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

class MyShelfItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: this.props.image_url,
      name: this.props.name,
      status: this.props.status,
      author: this.props.author,
      average_rating: this.props.average_rating
    };
  }

  onStarClick(nextValue, prevValue, name) {
    console.log(nextValue);
    this.setState({ average_rating: nextValue });
  }

  render() {
    return (
      <Panel>
        <Row>
        
          <Col md={2}>
            <img src={this.state.image_url} alt="bookPic" />
          </Col>

          <Col md={2}>
            <p style={{marginTop:"30%"}}>{this.state.name}</p>
          </Col>

          <Col md={2}>
            <p style={{marginTop:"30%"}}>{this.state.status}</p>
          </Col>

          <Col md={2}>
            <p style={{marginTop:"30%"}}>{this.state.author}</p>
          </Col>
          <Col md={2}>
            <p style={{marginTop:"30%"}}>{this.state.average_rating}</p>
          </Col>
          <Col md={2}>
          <div style={{marginTop:"30%"}}>
            <StarRatingComponent
              
              name="rate1"
              starCount={5}
              value={this.state.average_rating}
              onStarClick={this.onStarClick.bind(this)}
            />
            </div>
          </Col>
        </Row>
      </Panel>
    );
  }
}

export default MyShelfItem;
