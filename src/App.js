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
          render={ () => <Dialogs  state={props.appState.messagePage}/> }/>
          <Route path="/profile" 
          render={ () => <Profile state={props.appState.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/> } />
        </div>
      </div> 
    </BrowserRouter>
  );
}

export default App; 