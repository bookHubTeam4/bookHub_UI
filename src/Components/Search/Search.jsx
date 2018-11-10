import React from "react";
import { Glyphicon } from "react-bootstrap";
import NavBar from "../../Components/NavBar/NavBar";
import Pen from "../../img/quil.svg";
import Books from "../HOC/BookLoading";
import Style from "../Search/Search.css";

const Search = props => {
  return (
    <div className={Style.pimg}>
      <NavBar />
      <div className={Style.stext}>
        “I shall be miserable if I have not an excellent library.” <br />
        <img className={Style.spen} src={Pen} alt="pen" />
      </div>
      <div className={Style.ptext}>
        <form
          onSubmit={e => {
            e.preventDefault();
            props.click();
          }}
        >
          <input
            className={Style.searchText}
            type="input"
            onChange={e => {
              props.text(e.target.value);
            }}
          />{" "}
          <button className={Style.sbtn}>
            <Glyphicon
              style={{ color: "yellow" }}
              glyph="glyphicon glyphicon-search"
            />
          </button>
        </form>
      </div>
      <Books input={props.input} books={props.books} />
    </div>
  );
};

export default Search;
