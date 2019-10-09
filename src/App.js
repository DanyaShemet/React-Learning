import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import {Route, BrowserRouter} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {  
  return (
    <BrowserRouter >
      <HeaderContainer  />
      <div className='app-wrapper grid'>
         <div className='app-wrapper__content'>
          <Route  path="/dialogs" 
          render={ () => <DialogsContainer  /> }/>
          <Route path="/profile" 
          render={ () => <Profile  /> } />
        </div>
      </div> 
    </BrowserRouter> 
  );
}

export default App; 