import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost ,updateNewPostText} from './redux/state'


export let rerenderEntireTree = (state) =>{
    ReactDOM.render(<App appState={state} updateNewPostText={updateNewPostText} addPost={addPost}/>, document.getElementById('root'));
};




