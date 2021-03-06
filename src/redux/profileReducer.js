import { profileAPI } from '../../src/api/api';

const ADD_POST = 'ADD_POST';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData : [
        {id : 1, message:'hi, how are you?' , likesCount: 23},
        {id : 2, message:'Hello, it\'s my first Post', likesCount: 12},
    ],
    profile: null,
    status: ""
};

export const profileReducer = (state = initialState, action) =>{
    switch(action.type){ 
        case  ADD_POST:{
            let newPost = {
                id: 3,
                message : action.newTextPost,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText : ''
            }
        }
        
        case SET_USER_PROFILE:{
            return{
                ...state, 
                profile: action.profile
            }
        }
        case SET_STATUS:{
            return{
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export let addPostActionCreator = (newTextPost) => {
    return{type: ADD_POST, newTextPost}
}
       
export let setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile } 
}

export let setStatus = (status) => {
    return { type: SET_STATUS, status } 
}
export const getUserProfile = (userId) =>{
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response =>{
            dispatch(setUserProfile(response.data));
        })
    }
}

export const getUserStatus = (userId) =>{
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response =>{
            dispatch(setStatus(response.data));
        })
    }
}

export const updateUserStatus = (status) =>{
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response =>{
            if(response.data.resultCode === 0){
                dispatch(setStatus(status));
            }
        })
    }
}
export default profileReducer;
