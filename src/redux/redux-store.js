import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    sidebar : sidebarReducer,
    profilePage : profileReducer,
    messagePage : messageReducer,
    usersPage   : usersReducer,
    auth: authReducer,
    form: formReducer, 
});      

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;