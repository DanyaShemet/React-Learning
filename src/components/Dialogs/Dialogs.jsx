import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {maxLengthCreator, requiredField} from '../../utils/validator/validators'
import {reduxForm, Field} from 'redux-form';
import {Textarea} from '../common/FormsControls/FormControls';

const maxLength = maxLengthCreator(50)

const Dialogs = (props) => {
   
    let state = props.messagePage;
    let dialogsElement = state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElement = state.messagesData.map( message => <Message message ={message.message} />);

    let AddMessage = (values) => {
        props.addMesage(values.newMess);
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
                <ReduxAddMessageForm onSubmit={AddMessage} />
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
              
                <Field component={Textarea} validate={[requiredField, maxLength]} name={"newMess"} placeholder="Enter message"/>
            </div>
            <div>
                <button >Add message</button>
            </div>
        </form>
    )
}
const ReduxAddMessageForm = reduxForm({ form: 'AddMessages'})(AddMessageForm)


export default Dialogs