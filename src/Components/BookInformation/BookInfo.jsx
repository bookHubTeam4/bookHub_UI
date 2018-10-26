import React, { Component } from 'react';
import { BookInfoService } from "../../Service/Services";
import Style from "./BookInfoStyle.css";


import {
    Container,
    Row,
    Col,
    Jumbotron,
    Badge,
    Button
} from 'reactstrap';




const queryString = require('query-string');



export default class BookInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            flag: false

        }

    }


    componentDidMount() {
        console.log("hellpp");

        console.log(window.location.href) // "im"
        console.log(window.location.href.substr(window.location.href.lastIndexOf('/') + 1));
        let isbn = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        BookInfoService(isbn)
            .then(e => e.json()).then(e => {
                console.log(e);
                this.setState({ items: e });
                console.log("this is item " + this.state.items.book.title);
                this.setState({ flag: true });
            })


        console.log("im in book info component");



    }




    render() {







        if (this.state.flag) {

            return (
                <div className={Style.pimg}>

                    <Jumbotron>
                        <Container>
                            <Row>
                                <Col>
                                    <Badge color="primary"><h1>{this.state.items.book.title}</h1></Badge>

                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>

                  
                 
                  <Jumbotron >
                    <div class="row">


                        <div class="col-md-2">
                            <img width="150" height="150" src={`${this.state.items.book.image_url}`} />
                        </div>
                       

                        <div class="col-md-10">

                            <h4> {this.state.items.book.description}</h4>
                        </div>

                    </div>
                    <br /> <br /> <br />
                    <div class="row">
                        <div class="col-md-4">
                            <p>AUTHOR : {this.state.items.book.author}</p>
                            <p>Published Date : {this.state.items.book.published_date}</p>
                            <p>ISBN : {this.state.items.book.isbn}</p>
                        </div>   </div>
                        


                   
                        <div align = "center">
                            <Button color="primary">Add To Reading List</Button>{' '}
                            <Button color="success">Finished Reading</Button>{' '}
                            <Button color="danger">Can't Buy?</Button>{' '}
                        </div>
                    </Jumbotron>


                </div>


            );
        }

        return (
            <div>Loading...</div>
        );


    }
}
