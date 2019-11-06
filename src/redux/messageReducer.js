const ADD_MESSAGE = 'ADD_MESSAGE';


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
};

const messageReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_MESSAGE:{
            let newMessage = {
                id: 4,
                message : action.newMess,
            };
            return{
                ...state, 
                messagesData: [...state.messagesData, newMessage], 
            }
        }
       
        default:
            return state
    }
}

export let addMessageActionCreator = (newMess) => {
    return{type: ADD_MESSAGE, newMess}
}




export default messageReducer;
