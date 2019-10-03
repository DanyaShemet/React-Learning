import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) =>{

  
    return(
        <div >
          <ProfileInfo />
          <MyPosts 
            postData={props.state.postData} 
            updateNewPostText={props.updateNewPostText} 
            newPostText={props.state.newPostText} 
            addPost={props.addPost}
          /> 
       </div>
    )
}

export default Profile;