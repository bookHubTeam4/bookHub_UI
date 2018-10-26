import React from "react";
import Search from "../../Components/Search/Search";
import { searchService } from "../../Service/Services";

class SearchMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      books: []
    };
  }

  searchInput = data => {
    this.setState({ searchText: data });
  };

  onSearch = () => {
    if (this.state.searchText.length > 0) {
      searchService(this.state.searchText)
        .then(e => e.json())
        .then(e => {
          console.log(e.books);
          this.setState({ books: e.books });
        });
    }
  };

  render() {
    return (
      <Search
        text={this.searchInput}
        click={this.onSearch}
        books={this.state.books}
      />
    );
  }
}

export default SearchMain;
