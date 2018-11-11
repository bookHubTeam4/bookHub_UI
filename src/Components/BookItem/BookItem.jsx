import React from "react";
import Style from "../BookItem/BookItem.css";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const BookItem = props => {

  return(
    <Link to={`/bookInfo/${props.book.isbn}`}>
       <img className={Style.bookpic} src={props.book.book_image} alt="book" />
    </Link>
  );

};

export default withRouter(BookItem);
