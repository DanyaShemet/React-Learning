import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {

    let dialogsData = [
        {id : 1,name:'Daniil'},
        {id : 2,name:'Andrew'},
        {id : 3, name:'Alex'},
        {id : 4, name:'Vlad'}  
    ];
    let dialogsElement = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesData = [
        {id : 1, message:'hi'},
        {id : 2, message:'hi, hello'},
        {id : 3, message:'hi, how are you?'},
    ];
    let messagesElement = messagesData.map( message => <Message message ={message.message}/>)

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