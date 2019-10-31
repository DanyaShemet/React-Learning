import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Proleader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) =>{

  if(!props.profile){
    return <Preloader />
  } 

    return(
        <div>
          <div className={classes.mainImage}>
            <img src={props.profile.photos.large} alt=""/>
          </div>  
          <div classNam e={classes.descBlock}>
            {props.profile.aboutMe}
            <ProfileStatus status="Hello"/>
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