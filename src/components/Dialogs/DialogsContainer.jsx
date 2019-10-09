import React from 'react';
import {connect} from 'react-redux';
import {addMessageActionCreator,updateNewMessageActionCreator} from '../../redux/messageReducer'
import Dialogs from './Dialogs';

// const DialogsContainer = (props) => {

//     return(
//         <StoreContext.Consumer>{
//             (store) =>{
//                 let state = store.getState().messagePage;

//                 let addingMessage = () => {
//                     store.dispatch(addMessageActionCreator());
//                 };
//                 let onChangeMessage = (text) => {
//                     store.dispatch(updateNewMessageActionCreator(text)); 
//                 };
//                 return(
//                     <Dialogs 
//                         addMesage={addingMessage}
//                         updateMessage={onChangeMessage}
//                         messagePage={state}
                       
//                     />
//                 )

//             }
//         }
//         </StoreContext.Consumer>
        
//     )
// }
let mapStateToProps = (state) =>{
    return{
        messagePage : state.messagePage,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addMesage: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text)); 
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer