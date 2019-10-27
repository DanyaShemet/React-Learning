import React from 'react'
import {connect} from 'react-redux';
import * as axios from 'axios'
import Users from './Users'
import { follow, unFollow, setUsers, setCurrentPage ,setTotalUsersCount, toggleIsFetching, toggleFollowingProgress} from '../../redux/usersReducer'
import Preloader from '../common/Preloader/Proleader';
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data =>{
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        })
    }

    onPageChanged = (pageNumber) =>{
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data =>{
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
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
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.usersPage.followingInProgress
    }
}
  



export default connect(mapStateToProps, 
    {
        follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress
    })
     (UsersContainer);
  