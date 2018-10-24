import React  from 'react';
//import {FormGroup, FormControl,InputGroup, Glyphicon} from 'react-bootstrap';
import {Redirect } from "react-router-dom";

export default class Gallery extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            infoLink: '',
            toInfoPage: false,
            isbn : 0
        };
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(param,e) {
        e.preventDefault();
        console.log('The link was clicked. with '+ param);
        this.setState({
            toInfoPage: true});
        this.setState({
          infoLink: param,
        isbn: param[1].identifier});

         

          console.log("checking type"+ param[1].type.toString());
          console.log("checking isbn"+ param[1].identifier.toString());
        console.log("this is "+this.state.infoLink);
      }


    render(){


        if (this.state.toInfoPage === true) {
        
        return <Redirect to= {`/bookInfo/${this.state.isbn}`} /> }

            else {

        return (



            <div>
            {
                this.props.items.map((item , i) => {
                    let {title, imageLinks , infoLink,industryIdentifiers} = item.volumeInfo;
                   
                    return (
                        <a href ={infoLink}  
                        target = "_blank"
                        key={i} className = "book" onClick= {e => this.handleClick(industryIdentifiers,e)} >
                        <img 
                        src ={imageLinks !== undefined? imageLinks.thumbnail : ''} 
                        alt = "book image"
                        className = "bookImage"
                        />
                        <div className = "titleText">{title }</div>

                        </a>
                        
                    );
                })
            }</div>

        ); }
    }
}