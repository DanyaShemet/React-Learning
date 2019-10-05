import React from 'react';
import './App.css';
import Header from './components/Header/Header';

import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom'


const App = (props) => {  
  return (
    <BrowserRouter >
      <Header state={props.appState.sidebar}/>
      <div className='app-wrapper grid'>
         <div className='app-wrapper__content'>
          <Route  path="/dialogs" 
          render={ () => <Dialogs  state={props.appState.messagePage} newMessageText={props.appState.messagePage.newMessageText}   dispatch={props.dispatch}/> }/>
          <Route path="/profile" 
          render={ () => <Profile state={props.appState.profilePage} dispatch={props.dispatch}/> } />
        </div>
      </div> 
    </BrowserRouter> 
  );
}

export default App; 