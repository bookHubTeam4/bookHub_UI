import React, { Component } from 'react';
const queryString = require('query-string');

export default class BookInfo extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            items:[],
            itm: []
            
        }
  
    }

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

         this.setState(
             {
            items :  json,
             itm : json.items
             }
         );

       // this.state.items = json;
       // this.state.itm = json.items;
        console.log("in fetch request");
        console.log(this.state.itm[0].volumeInfo.industryIdentifiers[0]);
        console.log(this.state.items);})

     // console.log( "we are here "+this.state.items[0]);
    

      }   
 
  render() {



    
       
    

    if ( ! this.state.itm[0] == []) {

    return (
      <div>
      <img src= {`${this.state.itm[0].volumeInfo.imageLinks.thumbnail}`} alt="book cover"/>
      </div>
    )
    }
    else
    {
        return (
            <div>Loading...</div>
        );
    }
  
}
}
