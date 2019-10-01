import React from 'react';
import classes from './Header.module.css'
const Header = () =>{
    return(
        <header className={classes.header}>
            <img src="https://placeit-assets.s3-accelerate.amazonaws.com/landing-pages/landing-page-redo-make-a-gaming-logo/Deadnauts-Esports-Logo-Maker.png" alt=""/>
        </header>
    )
}

export default Header;