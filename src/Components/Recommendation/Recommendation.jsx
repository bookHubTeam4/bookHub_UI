import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Styles from "./Recommendation.css";
import { Panel,Glyphicon } from "react-bootstrap";



class Recommendation extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows:true,
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
    return (
      <Panel>
        <Panel.Heading>Panel heading without a title</Panel.Heading>
        <Panel.Body>
          <Slider {...settings}>
            <div>
              <img src="http://placekitten.com/g/400/200" alt="book" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" alt="book" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" alt="book" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" alt="book" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" alt="book" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" alt="book" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" alt="book" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" alt="book" />
            </div>
          </Slider>
          <br />
        </Panel.Body>
      </Panel>
    );
  }
}

export default Recommendation;
