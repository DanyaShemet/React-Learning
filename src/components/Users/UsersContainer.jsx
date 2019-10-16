import React from 'react'
import {connect} from 'react-redux';
import Users from './Users';

import { followActionCreator, unFollowActionCreator, setUsersActionCreator } from '../../redux/usersReducer'

let mapStateToProps = (state) =>{
    return{
        usersPage: state.usersPage.usersData
    }
}
  
let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userId) =>{    
            dispatch(followActionCreator(userId));
        },
        unFollow: (userId) =>{
            dispatch(unFollowActionCreator(userId))
        },
        setUsers: (usersPage) =>{
            dispatch(setUsersActionCreator(usersPage))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer