import React from 'react';
import classes from './../Dialogs.module.css'


const Message = (props) => {
  

    return (
        <div>
            <div>
                <div className={classes.message}>{props.message}</div>   
            </div>
           
        </div>
        
    )
}


export default Message