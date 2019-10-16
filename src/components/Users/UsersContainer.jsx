import React from 'react'
import {connect} from 'react-redux';
import Users from './Users';

import { followActionCreator, unFollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator ,setUsersTotalCountActionCreator} from '../../redux/usersReducer'

let mapStateToProps = (state) =>{
    return{
        usersPage: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,

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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountActionCreator(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer