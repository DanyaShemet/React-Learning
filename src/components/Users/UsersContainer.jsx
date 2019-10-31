import React from 'react'
import {connect} from 'react-redux';
import Users from './Users'
import { setCurrentPage , toggleFollowingProgress, getUsers , followSucces , unFollowSucces} from '../../redux/usersReducer'
import Preloader from '../common/Preloader/Proleader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersContainer extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }           

    onPageChanged = (pageNumber) =>{
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                followingInProgress={this.props.followingInProgress}
                followSucces = {this.props.followSucces}    
                unFollowSucces = {this.props.unFollowSucces}               
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
  


export default compose(
    connect(mapStateToProps, {setCurrentPage, toggleFollowingProgress, getUsers, followSucces, unFollowSucces}),
    withAuthRedirect
)(UsersContainer)
  