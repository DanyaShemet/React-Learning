import './index.css';
import * as serviceWorker from './serviceWorker';

import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContext, {Provider} from './StoreContext';



let rerenderEntireTree = () =>{
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root')
    );
};

rerenderEntireTree();
store.subscribe(() => {
  
    rerenderEntireTree();
});

// If you want your app to work offline and load faster, you c  an change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
