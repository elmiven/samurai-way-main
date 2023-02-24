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

export
type PostPropsType = {
  posts: PostType[]
}
export
type PostType = {
  id: number, 
  message: string, 
  likescount: number 
}

export
type DialogsPropsType = {
  dialogs:DialogsType[]

}
export
type DialogsType = {
  id: number, 
  name: string 
}

export
type MessagesPropsType = {
 messages: MessagesType[]

}
export
type MessagesType = {
  id: number
  message: string

}



const App = (props: PostPropsType & DialogsPropsType & MessagesPropsType) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      {/* Hello, samurai! Let's go! */}
      <Header />
      <Navbar />  
      <div className='app-wrapper-content'>
        <Route path='/profile' render={()=><Profile posts={props.posts} />} />
        <Route path='/dialogs' render={()=><Dialogs dialogs={props.dialogs} messages={props.messages} />} />
        <Route path='/music' component={Music} />
        <Route path='/news' component={News} />
        <Route path='/settings' component={Settings} />
      </div>
      {/*<Technologies /> */}
    </div>
    </BrowserRouter>
  );
}







export default App;
