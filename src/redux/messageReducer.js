const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW__MESSAGE = 'UPDATE_NEW__MESSAGE';

let initialState = {
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
    ],
    newMessageText : '',
};

const messageReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_MESSAGE:{
            let newMessage = {
                id: 4,
                message : state.newMessageText,
            };
            return{
                ...state, 
                messagesData: [...state.messagesData, newMessage], 
                newMessageText:  ''
            }
        }
        case UPDATE_NEW__MESSAGE:{
            return {
                ...state, 
                newMessageText: action.newText
            }
        } 
        default:
            return state
    }
}

export let addMessageActionCreator = () => {
    return{type: ADD_MESSAGE}
}
export let updateNewMessageActionCreator = (text) =>{
    return {type : UPDATE_NEW__MESSAGE, newText: text }
}



export default messageReducer;
