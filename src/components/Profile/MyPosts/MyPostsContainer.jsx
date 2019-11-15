import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer'
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


let mapStateToProps = (state) =>{
  return{
      profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) =>{
  return{
      addPost: (newTextPost) => {
        dispatch(addPostActionCreator(newTextPost));
      },
     
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;