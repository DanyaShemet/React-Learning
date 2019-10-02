import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = (props) =>{

    let postsElement = props.postData.map( post => <Post message={post.message} likesCount={post.likesCount}/>);

    return(
        <div className={classes.postsBlock}>
          <h2>My Post</h2>
          <div>
            <div>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
              <button>Add post</button>
            </div>
          </div>
          <div className={classes.posts}>
            {postsElement}
          </div>
        </div>
    
    )
}

export default MyPosts;