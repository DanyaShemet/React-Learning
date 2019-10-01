import React from 'react';
import classes from './Nav.module.css'
import {NavLink} from 'react-router-dom'

const Nav = () =>{
    return(
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to="/profile"  rel="noopener noreferrer" activeClassName={classes.active}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs"  rel="noopener noreferrer" activeClassName={classes.active}>Messages</NavLink>
                </li>
                <li><a href="/news"  rel="noopener noreferrer" activeClassName={classes.active}>News</a></li>
                <li><a href="/music"  rel="noopener noreferrer" activeClassName={classes.active}>Music</a></li>
                <li><a href="/settings"  rel="noopener noreferrer" activeClassName={classes.active}>Settings</a></li>
            </ul>
        </nav>
    )
}

export default Nav;