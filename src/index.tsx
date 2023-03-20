import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';





const rerenderEntireTree = (state: any) => {
  ReactDOM.render(
      <App appState={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>,
    document.getElementById('root')
  );
  }

 rerenderEntireTree(store.getState())

 store.subscribe(rerenderEntireTree);