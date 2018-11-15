import React, { Component } from "react";
import { BookInfoService,BookStatusService } from "../../Service/Services";
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
      buttonClicked: false,
      button1: "primary",
      button2: "primary",
      button3: "primary",
    };
   
    this.check=this.check.bind(this);
    
  }

  check(param)
  {
    console.log("Button "+param +" clicked");
    
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
    BookStatusService(param,this.props.match.params.number,this.props.tokken)
    .then(response=>response.json())
    .then(data => {
      
      if(data.status === "wants_to_read")
                      {
                        this.setState( {button1 : "success",button2 : "primary",button3 : "primary"});
                      }
      else if (data.status === "reading")
      {
        this.setState( {button1 : "primary",button2 : "success",button3 : "primary"});
      
      }
      else if (data.status === "read")
      {

        this.setState( {button1 : "primary",button2 : "primary",button3 : "success"});
      
      }
  
  })
    console.log(" promise made ");
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
                    <h1 align="center">{this.state.items.book.title}</h1>
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
              <Button color={this.state.button1} onClick={() => this.check(1)} >1Add To Reading List</Button>{" "}
                <Button color={this.state.button2}  onClick={() => this.check(2)}  >2Reading </Button>{" "}
                <Button color={this.state.button3}  onClick={() => this.check(3)} >3Finished Reading</Button>{" "}
           
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