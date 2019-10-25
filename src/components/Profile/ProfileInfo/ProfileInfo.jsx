import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Proleader';

const ProfileInfo = (props) =>{

  if(!props.profile){
    return <Preloader />
  } 

    return(
        <div>
          <div className={classes.mainImage}>
            <img src={props.profile.photos.large} alt=""/>
             
            <img src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" alt=""/>
          </div>  
          <div classNam e={classes.descBlock}>
            {/* Its my profile, welcome */}
            {props.profile.aboutMe}
          </div>
          <div>
            {props.profile.lookingForAJob}
            {props.profile.lookingForAJobDescription} 
            {props.profile.fullName}
          </div>
     
       </div>
    ) 
}

export default ProfileInfo;