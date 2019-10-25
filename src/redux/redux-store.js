import { createStore, combineReducers } from "redux";
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    sidebar : sidebarReducer,
    profilePage : profileReducer,
    messagePage : messageReducer,
    usersPage   : usersReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;


export default store;