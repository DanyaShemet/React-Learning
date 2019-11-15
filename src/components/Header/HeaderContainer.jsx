import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logOut} from '../../redux/authReducer'
import { compose } from 'redux';

class HeaderContainer extends React.Component{
 
  render(){
    return(
        <Header {...this.props} />
    )
  }
}

let mapStateToProps = (state) =>{
    return{
        sidebar: state.sidebar,
        isAuth : state.auth.isAuth,
        login : state.auth.login,
    }
}

export default compose(
  connect(mapStateToProps, {logOut}),
)(HeaderContainer)


