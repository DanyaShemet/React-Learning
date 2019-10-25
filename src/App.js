import React from 'react';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {  
  return (
    <BrowserRouter >
      <HeaderContainer  />
      <div className='app-wrapper grid'>
         <div className='app-wrapper__content'>
          <Route  path="/dialogs" 
          render={ () => <DialogsContainer  /> }/>
          <Route path="/profile/:userId?" 
          render={ () => <ProfileContainer /> } />
          <Route path="/users"   
          render={ () => <UsersContainer /> } />
        </div>
      </div> 
    </BrowserRouter> 
  ); 
}

export default App; 