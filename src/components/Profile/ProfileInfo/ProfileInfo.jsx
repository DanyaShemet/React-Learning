import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Proleader';
import ProfileStatusHooks from './ProfileStatusHooks';

const ProfileInfo = (props) =>{

  if(!props.profile){
    
    return <Preloader />
  } 

    return(
        <div>
          <div className={classes.mainImage}>
            <img src={props.profile.photos.large} alt=""/>
          </div>  
          <div className={classes.descBlock}>
        
            <ProfileStatusHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
          </div>
          <div>
           
          </div>
     
       </div>
    ) 
}

export default ProfileInfo;