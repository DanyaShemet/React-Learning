import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
const Dialogs = (props) => {
   
    let state = props.messagePage;
    let dialogsElement = state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElement = state.messagesData.map( message => <Message message ={message.message} />);

    let onAddMessage = () => {
        props.addMesage();
    };
    let onChangeMessage = (e) => {
        let text = e.target.value;
        props.updateMessage(text);
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
                        <textarea  onChange={onChangeMessage} value={props.newMessageText} />
                    </div>
                    <div>
                        <button onClick={onAddMessage} >Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs