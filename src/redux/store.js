import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import sidebarReducer from './sidebarReducer';

let store = {
    // _state : {
    //     profilePage: {
    //         postData : [
    //             {id : 1, message:'hi, how are you?' , likesCount: 23},
    //             {id : 2, message:'Hello, it\'s my first Post', likesCount: 12},
    //         ],
    //         newPostText : 'shemet'
    //     },
    //     messagePage: {
    //         dialogsData : [
    //             {id : 1,name:'Daniil'},
    //             {id : 2,name:'Andrew'},
    //             {id : 3, name:'Alex'},
    //             {id : 4, name:'Vlad'}  
    //         ],
    //         messagesData : [
    //             {id : 1, message:'hi'},
    //             {id : 2, message:'hi, hello'},
    //             {id : 3, message:'hi, how are you?'},
    //         ],
    //         newMessageText : '',
    //     },
    //     sidebar : {
    //         navigationData : [
    //             {id : 1, nav: 'Profile'},
    //             {id : 2, nav: 'Dialogs'},
    //             {id : 3, nav: 'News'},
    //             {id : 4, nav: 'Photo'},
    //             {id : 5, nav: 'Settings'},
    //         ]
    //     }
    // },
    _callSubscriber(){},
    getState(){return this._state;},
    subscribe(observer){ this._callSubscriber = observer;},
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = messageReducer(this._state.messagePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action) 
        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;   