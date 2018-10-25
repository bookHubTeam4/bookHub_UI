import React from "react";
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import Book from "../../img/books.svg";
import Styles from "../NavBar/NavBar.css";

const NavBar = props => {
  return (
    <Row>
      <Col md={2}>
        <img className={Styles.slogo} src={Book} alt="Book" />
      </Col>
      <Col md={1}>
         <Link to="/"><span>BookHub</span></Link>
      </Col>
      <Col md={6} />
      <Col md={1}>Login</Col>
      <Col md={2}>Register</Col>
    </Row>
  );
};

export default NavBar;
