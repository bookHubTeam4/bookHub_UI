import React from "react";
import Search from '../../Components/Search/Search'
// import Style from "../SearchMain/SearchMain.css"

class SearchMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  searchInput  = (data) => {
    console.log(data)
  }
  onSearch = () =>{
    console.log("hello")
  }

  render() {
    return (
      <Search text={this.searchInput} click={this.onSearch}  />
    );
  }
}

export default SearchMain;
