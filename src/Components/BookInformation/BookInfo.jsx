import React, { Component } from "react";
import { BookInfoService } from "../../Service/Services";
import { connect } from "react-redux";
import Style from "./BookInfoStyle.css";
import { Container, Row, Col, Jumbotron, Badge, Button } from "reactstrap";

import {Redirect } from "react-router-dom";

class BookInfo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      flag: false,
      LoggedInFlag: false,
      buttonClicked: false
    };
   
    this.check=this.check.bind(this);
    
  }

  check()
  {
    
     // this.state.buttonClicked = true  ;
   
   // if(this.props.tokken)
   console.log("this is **********token "+this.props.tokken);
   if(this.props.tokken === "")
   {
    console.log("entering if statem");
    this.setState({ 
     
      buttonClicked : true
    });

   }
   else{
    console.log("entering else statem");
    this.setState({ 
      LoggedInFlag : true,
      buttonClicked : true
    });

  

   }

  }
  componentDidMount() {
    BookInfoService(this.props.match.params.number)
      .then(e => e.json())
      .then(e => {
        this.setState({ items: e, flag: true });
      });
      console.log(this.props.tokken);
  }

  render() {
         
    if (this.state.LoggedInFlag === false && this.state.buttonClicked === true) {
        
      return <Redirect to= '/login' /> }



    if (this.state.flag) {
      return (
        <div className={Style.pimg}>
          <Jumbotron>
            <Container>
              <Row>
                <Col>
                  <Badge color="primary">
                    <h1>{this.state.items.book.title}</h1>
                  </Badge>
                </Col>
              </Row>
            </Container>
          </Jumbotron>

          <Jumbotron>
            <div className="row">
              <div className="col-md-4">
                <img
                  width="300"
                  height="400"
                  src={this.state.items.book.image_url}
                  alt="book_pic"
                />
              </div>

              <div className="col-md-4">
                <h4> {this.state.items.book.description}</h4>
              </div>
            </div>
            <br /> <br /> <br />
            <div className="row">
              <div className="col-md-4">
                <p>AUTHOR : {this.state.items.book.author}</p>
                <p>Published Date : {this.state.items.book.published_date}</p>
                <p>ISBN : {this.state.items.book.isbn}</p>
              </div>{" "}
            </div>
            <div align="center">
              <Button color="primary" onClick={this.check} >Add To Reading List</Button>{" "}
              <Button color="success" onClick={this.check} >Finished Reading</Button>{" "}
              <Button color="danger" onClick={this.check}  >Can't Buy?</Button>{" "}
            </div>
          </Jumbotron>
        </div>
      );
    }

    return <div>Loading...</div>;
  }
}

const mapStateToProps = state => {
  return {
    tokken: state.tokken,
    name: state.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTokkenRecive: tokken => dispatch({ type: "TOKKEN", payLoad: tokken }),
    onNameReceive:name => dispatch({type:"NAME",payLoad: name})
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(BookInfo);