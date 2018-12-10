import React, { Component } from "react";
import { Modal, Row, Col } from "react-bootstrap";

class favouriteGenre extends Component {

  render() {
    console.log(this.props);
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Select Favourite Genre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Select Favourite Genre</h4>
          <form className="form-group">
            <Row className="show-grid">
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="classics"
                  name="classics"
                  value="classics"
                  onChange={this.handleChange}
                />{" "}
                classics
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="fantasy"
                  name="fantasy"
                  value="fantasy"
                  onChange={this.handleChange}
                />{" "}
                fantasy
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="mystery"
                  name="mystery"
                  value="mystery"
                  onChange={this.handleChange}
                />{" "}
                mystery
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="teen"
                  name="teen"
                  value="teen"
                  onChange={this.handleChange}
                />{" "}
                teen
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="art"
                  name="art"
                  value="art"
                  onChange={this.handleChange}
                />{" "}
                art
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="computers"
                  name="computers"
                  value="computers"
                  onChange={this.handleChange}
                />{" "}
                computers
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="business"
                  name="business"
                  value="business"
                  onChange={this.handleChange}
                />{" "}
                business
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="entertainment"
                  name="entertainment"
                  value="entertainment"
                  onChange={this.handleChange}
                />{" "}
                entertainment
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="fiction"
                  name="fiction"
                  value="fiction"
                  onChange={this.handleChange}
                />{" "}
                fiction
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="health"
                  name="health"
                  value="health"
                  onChange={this.handleChange}
                />{" "}
                health
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="history"
                  name="history"
                  value="history"
                  onChange={this.handleChange}
                />{" "}
                history
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="comedy"
                  name="comedy"
                  value="comedy"
                  onChange={this.handleChange}
                />{" "}
                comedy
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="romance"
                  name="romance"
                  value="romance"
                  onChange={this.handleChange}
                />{" "}
                romance
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="cooking"
                  name="cooking"
                  value="cooking"
                  onChange={this.handleChange}
                />{" "}
                cooking
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="science"
                  name="science"
                  value="science"
                  onChange={this.handleChange}
                />{" "}
                science
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="nature"
                  name="nature"
                  value="nature"
                  onChange={this.handleChange}
                />{" "}
                nature
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="sports"
                  name="sports"
                  value="sports"
                  onChange={this.handleChange}
                />{" "}
                sports
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="travel"
                  name="travel"
                  value="travel"
                  onChange={this.handleChange}
                />{" "}
                travel
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="culture"
                  name="culture"
                  value="culture"
                  onChange={this.handleChange}
                />{" "}
                culture
              </Col>
              <Col xs={12} md={4}>
                <input
                  type="checkbox"
                  id="misc"
                  name="misc"
                  value="misc"
                  onChange={this.handleChange}
                />{" "}
                misc
              </Col>
            </Row>
            <Modal.Footer>
              <Row className="show-grid">
                <Col md={1}>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={this.handleSelect}
                  >
                    Skip
                  </button>
                </Col>

                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.handleSelect}
                >
                  Submit
                </button>
              </Row>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}
export default favouriteGenre;
