import React from 'react';
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'
import Header from './Header';
import StoreContext from '../../StoreContext';

const HeaderContainer = (props) =>{
    return(
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().sidebar;
                return (
                    <Header sidebar={state} />
                )
            }
        }
        </StoreContext.Consumer>
        
    )
}

export default HeaderContainer;