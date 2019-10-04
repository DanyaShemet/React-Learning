import './index.css';
import * as serviceWorker from './serviceWorker';

import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



let rerenderEntireTree = (state) =>{
    ReactDOM.render(<App appState={state} updateNewPostText={store.updateNewPostText.bind(store)} addPost={store.addPost.bind(store)}/>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you c  an change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
