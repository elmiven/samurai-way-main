import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


import Technologies from './Technologies';



const App = () => {
  return (
    <div className='app-wrapper'>
      {/* Hello, samurai! Let's go! */}

      <Header />
      <Navbar />
      <Profile /> 

      {/* 
      <Technologies /> */}
    </div>
  );
}







export default App;
