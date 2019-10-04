const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
let store = {
    _state : {
        profilePage: {
            postData : [
                {id : 1, message:'hi, how are you?' , likesCount: 23},
                {id : 2, message:'Hello, it\'s my first Post', likesCount: 12},
            ],
            newPostText : 'shemet'
        },
        messagePage: {
            dialogsData : [
                {id : 1,name:'Daniil'},
                {id : 2,name:'Andrew'},
                {id : 3, name:'Alex'},
                {id : 4, name:'Vlad'}  
            ],
            messagesData : [
                {id : 1, message:'hi'},
                {id : 2, message:'hi, hello'},
                {id : 3, message:'hi, how are you?'},
            ]
        },
        sidebar : {
            navigationData : [
                {id : 1, nav: 'Profile'},
                {id : 2, nav: 'Dialogs'},
                {id : 3, nav: 'News'},
                {id : 4, nav: 'Photo'},
                {id : 5, nav: 'Settings'},
            ]
        }
    },
    _callSubscriber(){},
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 3,
                message : this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
   
};
export let addPostActionCreator = () => {
   
    return{type: ADD_POST}
}
export let updateNewPostTextActionCreator = (text) =>{
    return {type : UPDATE_NEW_POST_TEXT, newText: text }
}
  
export default store;
window.store = store;