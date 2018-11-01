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
    if (props.login) {
      books = (
        <div className={Style.Lbooks}>
        {" "}
          <div className={Style.loader}>Loading...</div>
        </div>
      );
    } else {
      books = (
        <div className={Style.books}>
          {" "}
          <div className={Style.loader}>Loading...</div>
        </div>
      );
    }
  }

  if (!isEmpty(props.books)) {
    if (props.login) {
      let foo = props.books; //props.books.splice(0, 4);
      let boo = foo.map((e, index) => {
        return <BookItem key={index} img={e.book_image} />;
      });

      books = <div className={Style.Lbooks}>{boo}</div>;
    } else {
      let foo = props.books.splice(0, 4);
      let boo = foo.map((e, index) => {
        return <BookItem key={index} img={e.book_image} />;
      });

      books = <div className={Style.books}>{boo}</div>;
    }
  }
  return <React.Fragment>{books}</React.Fragment>;
};

export default BookLoading;
