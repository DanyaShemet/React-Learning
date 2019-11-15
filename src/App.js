import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import {initializeApp} from './redux/appReducer'
import {connect} from 'react-redux';
import {compose} from 'redux';
import Preloader from './components/common/Preloader/Proleader';

class App extends React.Component {  

  componentDidMount(){
    this.props.initializeApp();
  }

  render(){
    if(!this.props.initialized){
      return < Preloader />
    }
    
    return(
      <div>
        <HeaderContainer  />
        <div className='app-wrapper grid'>
          <div className='app-wrapper__content'>
            <Route  path="/dialogs" 
            render={ () => <DialogsContainer  /> }/>
            <Route path="/profile/:userId?" 
            render={ () => <ProfileContainer /> } />
            <Route path="/users"   
            render={ () => <UsersContainer /> } />
            <Route path="/login"   
              render={ () => <Login /> } />
          </div>
        </div> 
      </div>
    )
  } 
}

const mapStatetoProps = (state) => ({
  initialized: state.app.initialized 
})

export default compose(
withRouter,
connect(mapStatetoProps,{initializeApp}))(App); 