import React from "react";
import Slider from "react-slick";
import { Link, withRouter } from "react-router-dom";
import { Panel } from "react-bootstrap";
import Styles from "./Recommendation.css";

const Recommendation = props => {
  const isEmpty = books =>
    books === null ||
    books === undefined ||
    (books.hasOwnProperty("length") && books.length === 0) ||
    (books.constructor === Object && Object.keys(books).length === 0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  let arraybook = [];
  if (!isEmpty(props.books)) {
    arraybook = props.books.map((e, i) => {
      return (
        <Link to={`/bookInfo/${e.isbn}`}>
          <img className={Styles.recpic} src={e.image_url} alt="book" />
        </Link>
      );
    });
  }

  return (
    <React.Fragment>
      <Panel style={{ margin: "70px" }} bsStyle="info">
        <Panel.Heading>
          <h3>{props.genre}</h3>
        </Panel.Heading>
        <Panel.Body>
          <Slider {...settings}>{arraybook}</Slider>
          <br />
        </Panel.Body>
      </Panel>
      <hr />
    </React.Fragment>
  );
};

export default withRouter(Recommendation);
