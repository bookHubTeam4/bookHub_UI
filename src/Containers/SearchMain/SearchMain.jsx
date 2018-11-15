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
      sClick: false,
      books: []
    };
  }

  userLogout = () =>{
    this.setState({
      searchText: "",
      sClick: false,
      books: []
    })
  }

  searchInput = data => {
    this.setState({ searchText: data });
    if (data === "") {
      this.setState({ books: [] });
    }
  };

  onSearch = () => {
    let search = Object.assign({}, this.state);
    if (search.searchText.length > 0) {
      this.setState({ sClick: true });
      searchService(search.searchText)
        .then(e => e.json())
        .then(e => {
          console.log(e.books);
          this.setState({
            books: e.books,
            sClick: false
          });
        });
    }
  };

  render() {
    var user = null;
    console.log(this.props.tokken);
    if (this.props.tokken !== "") {
      console.log("hellooo");
      user = (
        <SearchLogin
          login={true}
          text={this.searchInput}
          click={this.onSearch}
          books={this.state.books}
          input={this.state.sClick}
          logout={this.userLogout}
        />
      );
    } else {
      user = (
        <Search
          login={false}
          text={this.searchInput}
          click={this.onSearch}
          books={this.state.books}
          input={this.state.sClick}
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
