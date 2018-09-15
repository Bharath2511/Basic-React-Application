import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from './Card';
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons' 
//since we can have more arrays in that file we have to deconstruct kids
//import {kids} from './kids'
// I want react dom to use a method called render
ReactDOM.render(<App />,
    //kids can be used in other files linked to index.js
    //here we are specyfing kids to be used in CardList
document.getElementById('root'));
registerServiceWorker();
