import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';


import Technologies from './Technologies';



const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      {/* Hello, samurai! Let's go! */}
      <Header />
      <Navbar />  
      <div className='app-wrapper-content'>
        <Route path='/profile' component={Profile} />
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/music' component={Music} />
        <Route path='/news' component={News} />
        <Route path='/Settings' component={Settings} />
      </div>
      {/*<Technologies /> */}
    </div>
    </BrowserRouter>
  );
}







export default App;
