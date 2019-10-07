import React from 'react';
import './App.css';
import Header from './components/Header/Header';

import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {  
  return (
    <BrowserRouter >
      <Header state={props.appState.sidebar}/>
      <div className='app-wrapper grid'>
         <div className='app-wrapper__content'>
          <Route  path="/dialogs" 
          render={ () => <DialogsContainer  store={props.store}/> }/>
          <Route path="/profile" 
          render={ () => <Profile store={props.store} /> } />
        </div>
      </div> 
    </BrowserRouter> 
  );
}

export default App; 