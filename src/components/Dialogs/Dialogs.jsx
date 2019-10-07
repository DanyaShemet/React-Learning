import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessageActionCreator,updateNewMessageActionCreator} from './../../redux/messageReducer'
const Dialogs = (props) => {
    let dialogsElement = props.state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElement = props.state.messagesData.map( message => <Message message ={message.message} />);
    let addingMessage = () => {
        props.dispatch(addMessageActionCreator());
    };
    let onChangeMessage = (e) => {
        let text = e.target.value;
        let action = updateNewMessageActionCreator(text)
        props.dispatch(action); 
    };
    
    return(
        <div className={classes.dialogs}>   
            <div className={classes.dialogs__items}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                <div>
                    {messagesElement}
                </div>
                <div>
                    <div>
                        <textarea  onChange={onChangeMessage} value={props.state.newMessageText} />
                    </div>
                    <div>
                        <button onClick={addingMessage} >Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs