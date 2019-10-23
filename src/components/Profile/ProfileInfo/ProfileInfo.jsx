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
            {/* <img src={props.profile.photos.large} alt=""/> */}
             
            <img src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" alt=""/>
          </div>
          <div className={classes.descBlock}>
            Its my profile, welcome
          </div>
     
       </div>
    ) 
}

export default ProfileInfo;