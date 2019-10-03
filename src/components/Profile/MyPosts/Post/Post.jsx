import React from 'react';
import classes from './Post.module.css'
const Post = (props) =>{
    return(
      <div className={classes.item}>
        <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" alt="" width="40"/>
        {props.message}
        <div>
          <span>Like {props.likesCount}</span>
        </div> 
      </div> 
    )
}

export default Post;