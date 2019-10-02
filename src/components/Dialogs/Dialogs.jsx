import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

 
    let dialogsElement = props.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

 
    let messagesElement = props.messagesData.map( message => <Message message ={message.message}/>)

    return(
        <div className={classes.dialogs}>   
            <div className={classes.dialogs__items}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs