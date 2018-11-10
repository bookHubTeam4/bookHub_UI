import React from "react";
import Style from "../BookItem/BookItem.css";

const BookItem = props => {
  return <img className={Style.bookpic} src={props.img} alt="book" />;
};

export default BookItem;
