import React from "react";
import Search from "../../Components/Search/Search";
import { searchService } from "../../Service/Services";

class SearchMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  searchInput = data => {
    this.setState({ searchText: data });
  };

  onSearch = () => {
    if (this.state.searchText.length > 2) {
      searchService(this.state.searchText)
        .then(e => e.json())
        .then(e => console.log(e));
    }
  };

  render() {
    return <Search text={this.searchInput} click={this.onSearch} />;
  }
}

export default SearchMain;
