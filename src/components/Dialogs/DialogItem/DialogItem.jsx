import React from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {

    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id}  rel="noopener noreferrer" className={classes.dialog} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem