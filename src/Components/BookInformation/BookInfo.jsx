import React, { Component } from 'react';
const queryString = require('query-string');

export default class BookInfo extends Component {

    componentWillMount() {
      //  const values = queryString.parse(this.props.location.search);
      console.log("hellpp");
      //const parsed = queryString.parse(this.props.location.search);
        console.log(window.location.href) // "im"
        console.log(window.location.href.substr(window.location.href.lastIndexOf('/') + 1));
       let isbn = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        
       console.log("isbn is "+ isbn);
       const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="+isbn+"&key=AIzaSyCzRLuhzYmdLVsVinQopkmunyvI-ae6I6I";
       
       fetch(BASE_URL, {method:"GET"})
       .then(response =>  response.json() )
       .then(json => {
        let {items} = json;
        console.log(items);})

      

      }

  render() {
    return (
      <div>
        This is Book Info page
      </div>
    )
  }
}
