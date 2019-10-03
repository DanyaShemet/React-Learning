import './index.css';
import * as serviceWorker from './serviceWorker';

import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost ,updateNewPostText} from './redux/state'
import {subscribe} from './redux/state'


let rerenderEntireTree = (state) =>{
    ReactDOM.render(<App appState={state} updateNewPostText={updateNewPostText} addPost={addPost}/>, document.getElementById('root'));
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you c  an change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
