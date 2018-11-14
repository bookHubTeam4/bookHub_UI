import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Reducer from './Store/Reducer'
import './index.css';
import {Provider} from 'react-redux';
import App from './App';
// import "../node_modules/slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

const store = createStore(Reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

