import React from 'react'
import {connect} from 'react-redux';
import * as axios from 'axios'
import Users from './Users'
import { followActionCreator, unFollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator ,setUsersTotalCountActionCreator, setIsFetchingActionCreator} from '../../redux/usersReducer'
import Preloader from '../common/Preloader/Proleader';


class UsersContainer extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) =>{
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>{
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
        })
    }
   
    render(){
        return <> 
        {this.props.isFetching ? <Preloader /> : null}
            <Users 
                totalUsersCount={this.props.totalUsersCount} 
                pageSize={this.props.pageSize} 
                currentPage={this.props.currentPage} 
                onPageChanged={this.onPageChanged} 
                usersPage={this.props.usersPage}
                unFollow={this.props.unFollow} 
                follow={this.props.follow}
            />
        </>
    }
}


let mapStateToProps = (state) =>{
    return{
        usersPage: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
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
        },
        toggleIsFetching: (isFetching) =>{
            dispatch(setIsFetchingActionCreator(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
  