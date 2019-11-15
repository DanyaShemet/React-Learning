import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';
import {maxLengthCreator, requiredField} from '../../../utils/validator/validators'
import {Textarea} from '../../common/FormsControls/FormControls';

const maxLength = maxLengthCreator(10)

const MyPosts = (props) =>{
    let state = props.profilePage;
    let postsElement = state.postData.map( post => <Post message={post.message} likesCount={post.likesCount}/>);
  
   
    let AddPost = (values) => {
      props.addPost(values.newTextPost);
  };

    return(
        <div className={classes.postsBlock}>
          <h2>My Post</h2>
          <ReduxAddPostForm  onSubmit={AddPost}/>
          <div className={classes.posts}>
            {postsElement}
          </div>
        </div>
    
    )
}
const AddPostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
      
        <Field component={Textarea} name={"newTextPost"} placeholder="Enter message" validate={[requiredField ]}/>
      </div>
      <div> 
        <button>Add post</button>
      </div>
    </form>
  )
}

const ReduxAddPostForm = reduxForm({ form: 'ProfileAddNewPost'})(AddPostForm)


export default MyPosts;