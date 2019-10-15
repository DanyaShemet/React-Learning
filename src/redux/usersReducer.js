import { stat } from "fs";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    usersData : [
    ],
    
};

const usersReducer = (state = initialState, action) =>{
    switch(action.type){ 
        case FOLLOW:{
            return {
                ...state, 
                usersData: state.usersData.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        }
           
        case UNFOLLOW:{
            return {
                ...state, 
                usersData: state.usersData.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        }
        case SET_USERS:{
            return{
                ...state, usersData: [...state.usersData, ...action.usersData]
            }
        }
        default:
            return state
    }
}

export let followActionCreator = (userId) => {
    return{type: FOLLOW, userId}
}
export let unFollowActionCreator = (userId) => {
    return{type: UNFOLLOW,userId}
}

export let setUsersActionCreator = (usersData) =>{
    return {type : SET_USERS, usersData }
}

export default usersReducer;
