import React from 'react';
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'
import Header from './Header';
import {connect} from 'react-redux';

// const HeaderContainer = (props) =>{
//     return(
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState().sidebar;
//                 return (
//                     <Header sidebar={state} />
//                 )
//             }
//         }
//         </StoreContext.Consumer>
        
//     )
// }

let mapStateToProps = (state) =>{
    return{
        sidebar: state.sidebar
    }
  }
  
  let mapDispatchToProps = (dispatch) =>{
    return{
        
    }
  }
  
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);


export default HeaderContainer;