import React from 'react';
import {connect} from 'react-redux';
import {addMessageActionCreator,updateNewMessageActionCreator} from '../../redux/messageReducer'
import Dialogs from './Dialogs';


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