import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer'
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) =>{


    return(
      <StoreContext.Consumer >{
        (store) => {
          let state = store.getState();

          let addingPost = () => { 
            store.dispatch(addPostActionCreator());
          };

          let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text)
            store.dispatch(action); 
          }
          return(
          <MyPosts 
            addPost={addingPost} 
            updateNewPostText={onPostChange}
            postData = {state.profilePage.postData}
            newPostText = {state.profilePage.newPostText}
          />
          )
          
        } 
      }
        </StoreContext.Consumer >
    )
}

export default MyPostsContainer;