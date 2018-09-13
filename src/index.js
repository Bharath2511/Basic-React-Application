import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from './Card';
import CardList from './CardList'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons' 
import {kids} from './kids'
// I want react dom to use a method called render
ReactDOM.render(
<CardList kids={kids}/>, 
document.getElementById('root'));
registerServiceWorker();
