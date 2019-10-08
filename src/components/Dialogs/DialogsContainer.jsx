import React from 'react';

import {addMessageActionCreator,updateNewMessageActionCreator} from '../../redux/messageReducer'
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';
const DialogsContainer = (props) => {

    return(
        <StoreContext.Consumer>{
            (store) =>{
                let state = store.getState().messagePage;

                let addingMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };
                let onChangeMessage = (text) => {
                    store.dispatch(updateNewMessageActionCreator(text)); 
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
        }
            
        </StoreContext.Consumer>
        
    )
}

export default DialogsContainer