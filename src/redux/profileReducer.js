const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postData : [
        {id : 1, message:'hi, how are you?' , likesCount: 23},
        {id : 2, message:'Hello, it\'s my first Post', likesCount: 12},
    ],
    newPostText : 'shemet'
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

export default profileReducer;
