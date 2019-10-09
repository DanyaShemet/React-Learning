import { createStore, combineReducers } from "redux";
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import sidebarReducer from './sidebarReducer';

let reducers = combineReducers({
    sidebar : sidebarReducer,
    profilePage : profileReducer,
    messagePage : messageReducer

});

let store = createStore(reducers);


export default store;