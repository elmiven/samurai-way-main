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
import Sidebar from './components/Sidebar/Sidebar';


import Technologies from './Technologies';

type appStateType = {
  appState: {
    posts: PostType[];
    dialogs: DialogsType[];
    messages: MessagesType[];
  };
}

// type appStateType = {
//   posts: PostType[];
//   dialogs: DialogsType[];
//   messages: MessagesType[];
//   }


export
  type PostPropsType = {

    newPostText: string | number | readonly string[] | undefined;
    posts: PostType[]
    addPost?: () => void
    updateNewPostText?: (a: string) => void
    dispatch: any
  }

export
  type PostType = {
    id: number,
    message: string,
    likescount: number
  }

export
  type DialogsPropsType = {
    dialogs: DialogsType[]

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



const App = (props: any) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        {/* Hello, samurai! Let's go! */}
        <Header />
        <Navbar state={props.appState.sidebar} />
        {console.log(props.appState.sidebar)}

        <div className='app-wrapper-content'>
          <Route path='/profile' render={() =>
            <Profile
              state={props.appState.profilePage}
              dispatch={props.dispatch}
              // updateNewPostText={props.updateNewPostText}
            />}
          />
          <Route path='/dialogs' render={() =>
            // <Dialogs state={props.appState.dialogsPage} 
            <Dialogs store={props.store} 
            
            />}
          />
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
