import React from "react";
import { Glyphicon } from "react-bootstrap";
import NavBar from "../../Components/NavBar/NavBar";
import Pen from "../../img/quil.svg";
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
        <input
          className={Style.searchText}
          type="input"
          onChange={e => {
            props.text(e.target.value);
          }}
        />{" "}
        <Glyphicon
          style={{ color: "yellow" }}
          glyph="glyphicon glyphicon-search"
          onClick={e => {
            props.click();
          }}
        />
      </div>
    </div>
  );
};

export default Search;
