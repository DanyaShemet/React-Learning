import React from 'react';
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) =>{

    let state = props.sidebar;
    let navigationElements = state.navigationData.map( nav => <li><NavLink to={'/' + nav.nav}  rel="noopener noreferrer" activeClassName={classes.active}>{nav.nav}</NavLink></li>)

    return(
        <header className={classes.header}>
            <img src="https://placeit-assets.s3-accelerate.amazonaws.com/landing-pages/landing-page-redo-make-a-gaming-logo/Deadnauts-Esports-Logo-Maker.png" alt=""/>
            <nav className={classes.nav}>
                <ul>
                    {navigationElements}
                    <li>
                        {props.isAuth ? 
                        <div className={classes.logout}>
                            {props.login}
                            <button onClick={props.logOut}>Log out</button>
                        </div> : <NavLink to={'/login'}>Login</NavLink>}
                       
                    </li>
                    
                </ul>
             
            </nav>
        </header>
    )
}

export default Header;