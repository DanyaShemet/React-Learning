import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    {id : 1, message:'hi, how are you?' , likesCount: 23},
    {id : 2, message:'Hello, it\'s my first Post', likesCount: 12}
];

let messagesData = [
    {id : 1, message:'hi'},
    {id : 2, message:'hi, hello'},
    {id : 3, message:'hi, how are you?'},
];

let dialogsData = [
    {id : 1,name:'Daniil'},
    {id : 2,name:'Andrew'},
    {id : 3, name:'Alex'},
    {id : 4, name:'Vlad'}  
];

ReactDOM.render(<App postData={postData} messagesData={messagesData} dialogsData={dialogsData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
