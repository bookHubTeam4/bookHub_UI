import React from 'react';
import {withRouter} from 'react-router';
import Navbar from '../NavBar/NavBar'

class Myshelf extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
            </div>
        );
    }
}

export default withRouter(Myshelf);