import React from 'react';
import {connect} from 'react-redux';
import {addMessageActionCreator,updateNewMessageActionCreator} from '../../redux/messageReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';
import { compose } from 'redux';
let mapStateToProps = (state) =>{
    return{
        messagePage : state.messagePage
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)