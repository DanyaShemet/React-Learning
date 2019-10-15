import { createStore, combineReducers } from "redux";
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    sidebar : sidebarReducer,
    profilePage : profileReducer,
    messagePage : messageReducer,
    usersPage   : usersReducer,

});

let store = createStore(reducers);


export default store;