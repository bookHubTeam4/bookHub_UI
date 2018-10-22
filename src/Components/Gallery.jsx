import React  from 'react';
//import {FormGroup, FormControl,InputGroup, Glyphicon} from 'react-bootstrap';

export default class Gallery extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            infoLink: ''
        };
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(param,e) {
        e.preventDefault();
        console.log('The link was clicked. with '+ param);
        this.setState({
          infoLink: param});

        console.log("this is "+this.state.infoLink);
      }


    render(){
        return (
            <div>
            {
                this.props.items.map((item , i) => {
                    let {title, imageLinks , infoLink} = item.volumeInfo
                    return (
                        <a href ={infoLink}  
                        target = "_blank"
                        key={i} className = "book" onClick= {e => this.handleClick(infoLink,e)} >
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

        );
    }
}