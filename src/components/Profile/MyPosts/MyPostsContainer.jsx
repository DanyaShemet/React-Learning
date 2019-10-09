import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer'
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

// const MyPostsContainer = (props) =>{


//     return(
//       <StoreContext.Consumer >{
//         (store) => {
//           let state = store.getState().profilePage;

//           let addingPost = () => { 
//             store.dispatch(addPostActionCreator());
//           };

//           let onPostChange = (text) => {
//             let action = updateNewPostTextActionCreator(text)
//             store.dispatch(action); 
//           }
//           return(
//           <MyPosts 
//             addPost={addingPost} 
//             updateNewPostText={onPostChange}
//             profilePage={state}
//           />
//           )
          
//         } 
//       }
//         </StoreContext.Consumer >
//     )
// }
let mapStateToProps = (state) =>{
  return{
      profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) =>{
  return{
      addPost: () => {
        dispatch(addPostActionCreator());
      },
      updateNewPostText: (text) => {
        let action = updateNewPostTextActionCreator(text)
        dispatch(action); 
      }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;