import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () =>{
    return(
        <div>
          <div>
            <img src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" alt=""/>
          </div>
          <div className={classes.descBlock}>
            ava + desc 
          </div>
     
       </div>
    )
}

export default ProfileInfo;