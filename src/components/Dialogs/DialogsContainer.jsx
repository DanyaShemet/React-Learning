import React from 'react';

import {addMessageActionCreator,updateNewMessageActionCreator} from '../../redux/messageReducer'
import Dialogs from './Dialogs';
const DialogsContainer = (props) => {

    let state = props.store.getState().messagePage;

    let addingMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };
    let onChangeMessage = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text)); 
    };
    
    return(
        <Dialogs 
            addMesage={addingMessage}
            updateMessage={onChangeMessage}
            messagePage={state}
            newMessageText={state.newMessageText}
        />
    )
}

export default DialogsContainer