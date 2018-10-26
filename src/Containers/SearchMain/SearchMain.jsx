import React from "react";
import Search from "../../Components/Search/Search";
import SearchLogin from "../../Components/SearchLogin/SearchLogin";
import { connect } from "react-redux";
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
    var user = null;
    console.log(this.props.tokken);
    if (this.props.tokken) {
      user = (
        <SearchLogin
          text={this.searchInput}
          click={this.onSearch}
          books={this.state.books}
        />
      );
    } else {
      user = (
        <Search
          text={this.searchInput}
          click={this.onSearch}
          books={this.state.books}
        />
      );
    }
    return <React.Fragment>{user}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    tokken: state.tokken
  };
};

export default connect(mapStateToProps)(SearchMain);
