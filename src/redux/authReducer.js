import { authAPI } from '../../src/api/api';
import {stopSubmit} from 'redux-form'
const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
       userId: null,
       email: null,
       login: null,
       isAuth: false
};

const authReducer = (state = initialState, action) =>{
    switch(action.type){ 
        case SET_USER_DATA:{
            return{ 
                ...state,
                ...action.data,
            }
        }
        default:
            return state
    }
}

export let setUserData = (userId, email, login, isAuth) => {
    return{type: SET_USER_DATA, data: {userId, email, login, isAuth}}
}


export const getAuthUserData = () =>{
    return (dispatch) => {
        return authAPI.getAuth().then(response =>{
            if(response.data.resultCode === 0){
              let {id, email, login} = response.data.data
              dispatch(setUserData(id, email, login, true))
            }
          })
    }
}

export const logIn = (email, password, rememberMe) => (dispatch) => {
    
    authAPI.logIn(email, password, rememberMe
        ).then(response =>{
        if(response.data.resultCode === 0){
            dispatch(getAuthUserData())
        }else{
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit("login", { _error: message})) 
        }
    })
}

export const logOut = () =>{
    return (dispatch) => {
        authAPI.logOut().then(response =>{
            if(response.data.resultCode === 0){
                dispatch(setUserData(null, null, null, false))
            }
          })
    }
}


export default authReducer;
