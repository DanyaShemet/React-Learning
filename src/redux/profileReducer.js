import { usersAPI } from '../../src/api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData : [
        {id : 1, message:'hi, how are you?' , likesCount: 23},
        {id : 2, message:'Hello, it\'s my first Post', likesCount: 12},
    ],
    newPostText : 'shemet',
    profile: null
};

export const profileReducer = (state = initialState, action) =>{
    switch(action.type){ 
        case  ADD_POST:{
            let newPost = {
                id: 3,
                message : state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText : ''
            }
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE:{
            return{
                ...state, 
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export let addPostActionCreator = () => {
    return{type: ADD_POST}
}

export let updateNewPostTextActionCreator = (text) =>{
    return {type : UPDATE_NEW_POST_TEXT, newText: text }
}

export let setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile } 
}
export const getUserProfile = (userId) =>{
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response =>{
            dispatch(setUserProfile(response.data));
        })
    }
}
export default profileReducer;
