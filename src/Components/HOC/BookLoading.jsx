import React from "react";
import Style from "./BookLoading.css";
import BookItem from "../BookItem/BookItem";

const BookLoading = props => {
  let books = null;
  const isEmpty = books =>
    books === null ||
    books === undefined ||
    (books.hasOwnProperty("length") && books.length === 0) ||
    (books.constructor === Object && Object.keys(books).length === 0);

  if (props.input && isEmpty(props.books)) {
    books = <div className={Style.loader}>Loading...</div>;
  }

  if (!isEmpty(props.books)) {
    let foo = props.books.splice(0, 4);
    let boo = foo.map((e, index) => {
      return <BookItem key={index} img={e.book_image} />;
    });

    books = <div className={Style.books}>{boo}</div>;
  }
  return <div className={Style.books}>{books}</div>;
};

export default BookLoading;
