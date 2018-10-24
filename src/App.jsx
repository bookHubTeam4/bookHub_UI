import React, { Component } from "react";
import SearchMain from "../src/Containers/SearchMain/SearchMain";
import { BrowserRouter, Route } from "react-router-dom";
import Styles from "./App.css";

import Gallery from './Components/Gallery';


////////////////for routing
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
//import SelectedBookInfo from './Components/SelectedBookInfo';
/////////////////////////
//this is test
class App extends Component {
  constructor(props)
    {
      super(props);
      this.state = {value :'hello',
      items : []
    };

      this.handleChange = this.handleChange.bind(this);
      this.search=this.search.bind(this);


    }

    search(){
      let query = this.state.value;
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=" + query;
    fetch(BASE_URL, {method:"GET"})
    .then(response =>  response.json())
    .then(json => {
      let {items} = json;
      console.log("items")
      console.log(items)
      this.setState({items: items});
    })
    .then(console.log("hello "+this.state.items));
    }

    handleChange(event){
      this.setState({
        value: event.target.value
      })
    }
  render() {
    
    return (


      //</Router>

      <BrowserRouter>
        <Route path="/" exact component={SearchMain} />

 <div className={Styles.App}>


<p>BookHub</p>

<label>
  Name:
  <input type="text" placeholder="Search for a book" value={this.state.value} onChange= {this.handleChange} />
  <input type="submit" value= "Submit"  onClick={this.search} />
</label>
<form>

</form>
<Gallery items={this.state.items} />
</div>




      </BrowserRouter>

    );
  }
}

export default App;
