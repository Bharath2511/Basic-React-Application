import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons' 
import {kids} from './kids'
// I want react dom to use a method called render
ReactDOM.render(
<div>
    <Card id={kids[0].id} name={kids[0].name} email={kids[0].email}/>
    <Card id={kids[1].id} name={kids[1].name} email={kids[1].email}/>
    <Card id={kids[2].id} name={kids[2].name} email={kids[2].email}/>
    
</div>, 
document.getElementById('root'));
registerServiceWorker();
