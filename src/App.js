import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom'


const App = (props) => {  
  return (
    <BrowserRouter >
      <div className='app-wrapper grid'>
        <Header />
        <Nav />
         
        <div className='app-wrapper__content'>

          <Route  path="/dialogs" 
          render={ () => <Dialogs  state={props.appState.messagePage}/> }/>
          <Route path="/profile" 
          render={ () => <Profile state={props.appState.profilePage}/> } />
        </div>
        
      </div> 
    </BrowserRouter>
  );
}

export default App;
